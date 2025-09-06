"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { ActionFunction, FormState } from "@/utils/types";

const initialState: FormState = {};

function FormContainer({
  action,
  children,
  className,
}: {
  action: ActionFunction;
  children: (state: FormState) => React.ReactNode; // render prop
  className?: string;
}) {
  const [state, formAction] = useActionState<FormState, FormData>(
    action,
    initialState
  );

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
    }

    if (state?.error) {
      if (typeof state.error === "string") {
        toast.error(state.error);
      } else if (typeof state.error === "object") {
        toast.error("Some fields have errors. Please check the form.");
      }
    }
  }, [state]);

  return (
    <form action={formAction} className={className}>
      {children(state)}
    </form>
  );
}

export default FormContainer;
