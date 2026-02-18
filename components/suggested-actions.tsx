"use client";
import type { UseChatHelpers } from "@ai-sdk/react";
import { motion } from "framer-motion";
import { memo } from "react";
import { Cloud, Code, Building2, Lightbulb } from "lucide-react";
import type { ChatMessage } from "@/lib/types";
import { Suggestion } from "./elements/suggestion";
import type { VisibilityType } from "./visibility-selector";

type SuggestedActionsProps = {
  chatId: string;
  sendMessage: UseChatHelpers<ChatMessage>["sendMessage"];
  selectedVisibilityType: VisibilityType;
};

function PureSuggestedActions({ chatId, sendMessage }: SuggestedActionsProps) {
  const suggestedActions = [
    { icon: Building2, text: "What services does Cognizant offer?" },
    { icon: Cloud, text: "Summarize the key benefits of cloud migration" },
    { icon: Code, text: "Help me write a business case for IT outsourcing" },
    { icon: Lightbulb, text: "What are best practices for managing teams?" },
  ];

  return (
    <div
      className="grid w-full gap-2 sm:grid-cols-2"
      data-testid="suggested-actions"
    >
      {suggestedActions.map(({ icon: Icon, text }, index) => (
        <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            initial={{ opacity: 0, y: 20 }}
            key={text}
            transition={{ delay: 0.05 * index }}
            className="h-full"
        >
            <Suggestion
            className="h-full w-full whitespace-normal rounded-sm p-3 text-left"
            onClick={(suggestion) => {
                window.history.pushState({}, "", `/chat/${chatId}`);
                sendMessage({
                role: "user",
                parts: [{ type: "text", text: suggestion }],
                });
            }}
            suggestion={text}
            >
            <div className="flex items-start gap-2">
                <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <span>{text}</span>
            </div>
            </Suggestion>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedActions = memo(
  PureSuggestedActions,
  (prevProps, nextProps) => {
    if (prevProps.chatId !== nextProps.chatId) return false;
    if (prevProps.selectedVisibilityType !== nextProps.selectedVisibilityType) return false;
    return true;
  }
);
