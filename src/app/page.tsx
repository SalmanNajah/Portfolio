import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="min-h-screen pt-10 flex flex-col md:flex-row md:justify-between">
      <div className="order-1 md:order-2 mb-4 md:mb-0">
        <Link href="/">
          <Image src="/avatar.png" alt="Logo" width={150} height={150} className="rounded-2xl object-cover" />
        </Link>
      </div>
      <div className="order-2 md:order-1">
        <h1 className="text-2xl md:text-4xl font-bold text-primary tracking-tight">Salman Najah</h1>
        <p className="text-secondary pt-4 text-sm md:text-base max-w-md">
          <span className="text-primary">21,</span> I build things, break stuff, and figure it out as I go.
          Deep into web, systems, and anything that scales or sparks curiosity.
          Obsessed with clean builds, clever tools, and ideas that stick.
          Still learning, still building.
        </p>
      </div>
    </Container>
  );
}
