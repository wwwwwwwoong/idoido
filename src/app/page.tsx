import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { Header } from "@/components";
import HeroClient from "./HeroClient";

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const isLoggedIn = !!data.user;

  return (
    <div style={{
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background Image - 80% Size */}
      <div style={{
        position: "absolute",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        height: "90%",
        zIndex: 0,
      }}>
        <Image
          src="/hero.png"
          alt="IDO 동화책"
          fill
          priority
          style={{
            objectFit: "cover", // cover 유지하되 영역만 80%
            objectPosition: "center bottom",
            borderRadius: "20px", // 둥근 모서리 추가하면 더 자연스러움
          }}
        />
      </div>

      {/* Content Layer */}
      <div style={{
        position: "relative",
        zIndex: 10,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}>
        <Header user={data.user} />


        {/* Content at top */}
        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "2rem 1rem",
          }}
        >
          <HeroClient isLoggedIn={isLoggedIn} />
        </main>
      </div>
    </div>
  );
}
