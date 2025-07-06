import EmailTemplateSlider from "./EmailTemplateSlider";
import Header from "./Header";
import OnboardingCarousel from "./OnboardingCarousel";
import PopupFormsSection from "./PopupFormsSection";

export default function Home() {
    return <div className="">
        <Header/>
        <OnboardingCarousel />
        <EmailTemplateSlider />
        <PopupFormsSection />
    </div>;
}
