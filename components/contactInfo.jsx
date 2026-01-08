"use client";
import React from "react";
import Image from "next/image";
import Typography from "./typography";

export default function ContactSection() {
  return (
    <section className="section-contact-wrapper">
      <div className="contact-card">
        <div className="flex flex-col gap-[var(--sp-16)]">
          <Typography variant="h3" className="contact-title">
            Contact Information
          </Typography>
          <Typography variant="body-4" className="contact-desc">
            Reach out to us directly through any of these channels.
          </Typography>
        </div>

        <div className="flex flex-col gap-[var(--sp-24)]">
          {/* Email */}
          <div className="contact-row">
            <span className="mt-1">
              <Image
                src="https://ik.imagekit.io/75zj3bigp/Container%20(1).png"
                width={18}
                height={18}
                alt="email icon"
              />
            </span>
            <div>
              <Typography variant="h6" className="contact-label">
                Email
              </Typography>
              <Typography variant="body-4" className="contact-value">
                support@hirezy.com
              </Typography>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-row">
            <span className="mt-1">
              <Image
                src="https://ik.imagekit.io/75zj3bigp/Icon%20(7).png"
                width={18}
                height={18}
                alt="phone icon"
              />
            </span>
            <div>
              <Typography variant="h6" className="contact-label">
                Phone
              </Typography>
              <Typography variant="body-4" className="contact-value">
                +1 (555) 123–4567
              </Typography>
            </div>
          </div>

          {/* Office */}
          <div className="contact-row">
            <span className="mt-1">
              <Image
                src="https://ik.imagekit.io/75zj3bigp/Container%20(2).png"
                width={18}
                height={18}
                alt="location icon"
              />
            </span>
            <div>
              <Typography variant="h6" className="contact-label">
                Office
              </Typography>
              <Typography variant="body-4" className="contact-value">
                123 Innovation Street
                <br />
                San Francisco, CA 94102
                <br />
                United States
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
