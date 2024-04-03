import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function SignInpage() {
  return (
    <div className="flex items-center h-screen w-full bg-teal-lighter">
      <div className="w-full bg-white rounded  p-8 m-4 md:max-w-sm md:mx-auto">
        <div>Login to Trenda Account</div>

        <div className="forms-wrapper">
          <div className="max-w-sm items-center gap-1.5 my-4">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>

          <div className=" max-w-sm items-center gap-1.5 my-4">
            <Label htmlFor="email"> Password </Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>
        </div>

        <div>
          <Button>
            <Mail className="w-1/2" /> Login with Email
          </Button>
        </div>
      </div>
    </div>
  );
}
