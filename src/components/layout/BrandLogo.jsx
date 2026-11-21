import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sizeClasses = {
  header: "w-[4.65rem] sm:w-[4.9rem]",
  mobile: "w-[4.9rem]",
  footer: "w-[6.9rem]"
};

export default function BrandLogo({
  className,
  onClick,
  size = "header",
  priority = false
}) {
  return (
    <Link
      href="/"
      aria-label="Beanstalk Day Nursery home"
      onClick={onClick}
      className={cn("inline-flex w-fit shrink-0 items-center", className)}
    >
      <Image
        src="/images/brand/beanstalk_logo.jpg"
        alt="Beanstalk Day Nursery"
        width={290}
        height={300}
        priority={priority}
        sizes="(max-width: 640px) 78px, 110px"
        className={cn("h-auto object-contain", sizeClasses[size] || sizeClasses.header)}
      />
    </Link>
  );
}
