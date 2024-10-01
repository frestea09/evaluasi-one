import { Button } from "@/components/ui/button";

export const CustomButton = ({ variant, children, ...props }: any) => (
  <Button variant={"secondary"} {...props} onClick={() => alert("hello worl")}>
    {children}
  </Button>
);
