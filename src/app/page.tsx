import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { Header } from "@/components";
import HeroClient from "./HeroClient";
import {
  GrassWave,
  WaveDivider,
  ServiceDescriptionSection,
  CurrencyShopSection,
  ReviewsSection,
  FAQSection,
  MagicShopSection,
  LandingSectionStyles
} from "./LandingSections";

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const isLoggedIn = !!data.user;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FFFEF5" }}>
      <LandingSectionStyles />

      {/* Hero Section - 흰색 배경 전체화면 */}
      <section style={{
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}>
        <Header user={data.user} />

        {/* Background Image */}
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
              objectFit: "cover",
              objectPosition: "center bottom",
              borderRadius: "20px",
            }}
          />
        </div>

        {/* Hero Content */}
        <main style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "2rem 1rem",
          position: "relative",
          zIndex: 10,
        }}>
          <HeroClient isLoggedIn={isLoggedIn} />
        </main>
      </section>

      {/* 풀 웨이브 구분선 */}
      <GrassWave color="#4CAF50" />

      {/* 서비스 설명 섹션 */}
      <ServiceDescriptionSection />

      {/* 리뷰 섹션 */}
      <ReviewsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* 씨앗 충전소 섹션 */}
      <CurrencyShopSection />

      {/* 마법의 상점 섹션 */}
      <MagicShopSection />

      {/* 파도 구분선 */}
      <WaveDivider color="#64B5F6" backgroundColor="#F3E8FF" />

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "2rem 1rem",
        backgroundColor: "#64B5F6",
        color: "white",
        fontSize: "0.8rem",
      }}>
        <p style={{ margin: 0 }}>© 2026 아이두(I-DO). 아이의 상상력을 동화책으로.</p>
      </footer>
    </div>
  );
}
