"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DescriptionText } from "@/components/text";

const TYPE_OPTIONS = [
  "Request a design",
  "Share a project",
  "Appreciation / Feedback",
  "Other",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "success" | "error";

/** Client component: holds form state and sends via EmailJS directly, so
 * the site stays fully static with no API route in front of it. */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(TYPE_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!EMAIL_PATTERN.test(email)) {
      setError("Enter a valid email address, like you@example.com.");
      setStatus("error");
      return;
    }

    // Honeypot: a real form field bots fill in but humans never see.
    const honeypot = (event.currentTarget.elements.namedItem(
      "botcheck"
    ) as HTMLInputElement | null)?.value;
    if (honeypot) {
      setError("Something went wrong. Please try again.");
      setStatus("error");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const toName = process.env.NEXT_PUBLIC_EMAILJS_TO_NAME;
    const toEmail = process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL;
    if (!serviceId || !templateId || !publicKey || !toName || !toEmail) {
      setError(
        "The contact form isn't configured yet — please reach out via the links in the footer instead."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError(null);

    try {
      // The existing EmailJS template only knows from_name/to_name/
      // from_email/to_email/message — there's no slot for the Type
      // select, so it's folded into the message body as a leading line
      // rather than sent as a separate param the template would drop.
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          to_name: toName,
          from_email: email,
          to_email: toEmail,
          message: `Type: ${type}\n\n${message}`,
        },
        publicKey
      );

      if (result.status !== 200) {
        throw new Error(result.text || "Submission failed.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setType(TYPE_OPTIONS[0]);
      setMessage("");
    } catch {
      setError("Something went wrong sending your message. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-2">
        <DescriptionText className="font-semibold text-accent">
          Thanks — message received!
        </DescriptionText>
        <DescriptionText>I&apos;ll get back to you as soon as I can.</DescriptionText>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot: visually hidden but present in the layout (not
       * display:none, so unsophisticated bots still fill it in), and hidden
       * from assistive tech since it's not a real field for humans. */}
      <div className="absolute h-0 w-0 overflow-hidden">
        <Label htmlFor="botcheck">Leave this field empty</Label>
        <Input
          id="botcheck"
          name="botcheck"
          type="text"
          tabIndex={-1}
          aria-hidden="true"
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="type">Type</Label>
        <Select
          value={type}
          onValueChange={(value) => setType(value ?? TYPE_OPTIONS[0])}
          name="type"
        >
          <SelectTrigger id="type" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {TYPE_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {error && (
        <p className="text-base leading-relaxed text-destructive md:text-lg" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" variant="accent" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
