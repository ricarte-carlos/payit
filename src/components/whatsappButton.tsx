"use client";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import { Icons } from "./icons";

export function WhatsappButton() {
  const posthog = usePostHog();
  return (
    <Link
      className="fixed md:bottom-10 md:right-10 bottom-6 right-4 z-50"
      href="https://api.whatsapp.com/send?phone=5582988180409&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20como%20a%20Pay%20it%20Brasil%20%20pode%20me%20ajudar%20a%20crescer.%20%0A%F0%9F%92%9C%F0%9F%87%A7%F0%9F%87%B7"
      target="_blank"
      onClick={() => posthog?.capture("button_whatsapp")}
    >
      <div className="flex items-center w-fit gap-3 bg-green-600 md:animate-touch animate-bounce rounded-full p-2 md:p-4">
        <Icons.Whatsapp className="md:w-8 w-9 h-auto text-white" />
        <p className="text-white hidden md:block">Entre em contato</p>
      </div>
    </Link>
  );
}
