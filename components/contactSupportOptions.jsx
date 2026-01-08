"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Container from "./spacing";
import SectionHeader from "./sectionHeader";
import Card from "./value";
import Input from "./input";
import InputGroup from "./InputGroup";
import Typography from "./typography";
import { Button } from "./button";
import axios from "axios";
import ContactInfo from "./contactInfo";
import OfficeHours from "./officeHours";

export default function ContactSupportOptions({
  /* ================= HEADER ================= */
  header = {
    label: "Contact Us",
    title: "Let's Start a Conversation",
    subtitle:
      "Have questions about Hirezy? We're here to help. Reach out to our team and we'll get back to you as soon as possible.",
    align: "center",
  },

  /* ================= SUPPORT SECTION ================= */
  supportSection = {
    header: {
      label: "Support Options",
      title: "More Ways to Get Help",
      subtitle: "Choose the support option that works best for you.",
      align: "center",
      labelBgColor: "white",
    },
    cards: [
      {
        variant: "secondary",
        title: "Help Center",
        description:
          "Browse our comprehensive documentation and find answers to common questions.",
        iconSrc: "https://ik.imagekit.io/a9uxeuyhx/Container.png",
        textLink: "Visit Help Center →",
        bgVariant: "white",
      },
      {
        variant: "secondary",
        title: "Live Chat",
        description:
          "Chat with our support team in real-time for immediate assistance.",
        iconSrc: "https://ik.imagekit.io/a9uxeuyhx/Container%20(1).png",
        textLink: "Start Chat →",
        bgVariant: "white",
      },
      {
        variant: "secondary",
        title: "Schedule a Call",
        description:
          "Book a time to speak with one of our product specialists.",
        iconSrc: "https://ik.imagekit.io/a9uxeuyhx/Container%20(2).png",
        textLink: "Book a Call →",
        bgVariant: "white",
      },
    ],
  },

  /* ================= FORM SECTION ================= */
  formSection = {
    header: {
      label: "Get in Touch",
      title: "Send Us a Message",
      subtitle:
        "Fill out the form below and our team will respond within 24 hours.",
    },
    fields: [
      {
        type: "group",
        columns: 2,
        inputs: [
          {
            label: "First Name",
            name: "firstName",
            placeholder: "Enter first name",
            variant: "ContactPageVariantInput",
          },
          {
            label: "Last Name",
            name: "lastName",
            placeholder: "Enter last name",
            variant: "ContactPageVariantInput",
          },
        ],
      },
      {
        label: "Email Address",
        name: "email",
        placeholder: "your.email@company.com",
        variant: "ContactPageVariantInput",
      },
      {
        label: "Company Name",
        name: "company",
        placeholder: "Enter your company name",
        variant: "ContactPageVariantInput",
      },
      {
        label: "Message",
        name: "message",
        placeholder: "Tell us how we can help...",
        variant: "ContactPageVariantInput",
      },
    ],
    button: {
      label: "Send Message",
      variant: "primary",
      size: "smTwo",
      icon: "https://ik.imagekit.io/a9uxeuyhx/Arrow%20Right.png",
      iconPosition: "right",
    },
  },

  /* ================= SIDE COMPONENTS ================= */
  sideComponents = [ContactInfo, OfficeHours],
  site,
}) {
  const [isMobile, setIsMobile] = useState(false);
  const slug = site.slug;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (name, e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!formData.email || !formData.email.includes("@")) {
        alert("Please enter a valid email");
        return;
      }

      const resNws = await axios.post(
        `https://blinkflo-backend.onrender.com/api/leads/${slug}`,
        {
          email : formData.email ,
          type: "contactForm", 
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.company,
          message: formData.message,
        }
      );

      if (
        resNws.data.success
      ) {
        alert("Contact Form Filled!!");
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Server error, please try again");
    }
  };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 450);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {/* HEADER */}
      <Container variant="header">
        <SectionHeader
          label={header.label}
          title={header.title}
          subtitle={header.subtitle}
          align={isMobile ? "left" : header.align}
        />
      </Container>

      <div className="contactUsLayoutShift">
        {/* SUPPORT OPTIONS */}
        <div className="support-options">
          <Container variant="primary" className="wrapper">
            <SectionHeader
              {...supportSection.header}
              align={isMobile ? "left" : supportSection.header.align}
            />

            <div className="support-card">
              {supportSection.cards.map((card, i) => (
                <Card key={i} {...card} />
              ))}
            </div>
          </Container>
        </div>

        {/* FORM */}
        <Container variant="primary" className="contact-form">
          <div className="contact-form-wrapper">
            <SectionHeader {...formSection.header} align="left" />

            <div className="flex flex-col gap-[var(--sp-24)]">
              {formSection.fields.map((field, i) =>
                field.type === "group" ? (
                  <InputGroup key={i} columns={field.columns}>
                    {field.inputs.map((input, idx) => (
                      <Input
                        key={idx}
                        {...input}
                        value={formData[input.name]}
                        onChange={(e) => handleChange(input.name, e)}
                      />
                    ))}
                  </InputGroup>
                ) : (
                  <Input
                    key={i}
                    {...field}
                    value={formData[field.name]}
                    onChange={(e) => handleChange(field.name, e)}
                  />
                )
              )}

              <Button
                variant={formSection.button?.variant || "primary"}
                size={formSection.button?.size || "smTwo"}
                icon={
                  <Image
                    src={
                      formSection.button?.icon ||
                      "https://ik.imagekit.io/a9uxeuyhx/Arrow%20Right.png"
                    }
                    width={14}
                    height={12}
                    alt="arrow"
                  />
                }
                iconPosition={formSection.button?.iconPosition}
                className="!w-fit"
                onClick={handleSubmit}
              >
                <Typography variant="h4">
                  {formSection.button?.label || "Send Message"}
                </Typography>
              </Button>
            </div>
          </div>

          {/* SIDE */}
          <div className="contact-info-container">
            {sideComponents.map((Comp, i) => (
              <Comp key={i} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
