// "use client";

// import { cn } from "@/lib/utils";
// import Logo from "@/components/navbar/Logo";
// import { Card, CardContent, CardHeader } from "../ui/card";
// import { Button } from "../ui/button";
// import Link from "next/link";
// import FormInput from "../form/FormInput";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import { loginAction } from "@/utils/authActions";
// import { useActionState, useEffect } from "react";
// import { toast } from "sonner";

// export default function LoginForm({ className }: { className?: string }) {
//   const [state, action] = useActionState(loginAction, undefined);

//   useEffect(() => {
//     if (state?.message) {
//       toast(state.message);
//     }
//   }, [state]);

//   return (
//     <div className={cn("flex flex-col gap-6", className)}>
//       <Card>
//         <CardHeader>
//           <div className=" flex justify-center">
//             <Logo />
//           </div>
//         </CardHeader>
//         <CardContent>
//           <form action={action}>
//             <div className="flex flex-col gap-3">
//               <FormInput
//                 name="email"
//                 type="email"
//                 placeholder="m@example.com"
//               />
//               {state?.error?.email && (
//                 <p className="text-sm text-red-400">
//                   {state.error.email.join(", ")}
//                 </p>
//               )}

//               <div className="flex items-center">
//                 <Label htmlFor="password">Password</Label>
//                 <Link
//                   href="#"
//                   className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
//                 >
//                   Forgot your password?
//                 </Link>
//               </div>
//               <Input id="password" type="password" name="password" />

//               {state?.error?.password && (
//                 <p className="text-sm text-red-400">
//                   {state.error.password.join(", ")}
//                 </p>
//               )}

//               <div className="flex flex-col gap-3">
//                 <Button
//                   type="submit"
//                   className="w-full cursor-pointer text-white"
//                 >
//                   Login
//                 </Button>
//                 <Button variant="outline" className="w-full cursor-pointer">
//                   Login with Google
//                 </Button>
//               </div>
//             </div>
//             <div className="mt-4 text-center text-sm">
//               Don&apos;t have an account?{" "}
//               <Link
//                 href="/auth/register"
//                 className="underline underline-offset-4"
//               >
//                 Register
//               </Link>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
