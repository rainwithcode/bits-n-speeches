"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import type { LoginState } from "./login/components/LoginForm";

export async function login(previousState: LoginState, formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error("Supabase login error:", {
      message: error.message,
      status: error.status,
      code: error.code,
    });
    return { error: `Unable to log in: ${error.message}` };
  }

  revalidatePath("/", "layout");
  redirect("/portal");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/portal");
}

// where to place
export async function signOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut({ scope: "local" });

  if (error) {
    throw new Error("Unable to sign out. Please try again later.");
  }

  redirect("/");
}
