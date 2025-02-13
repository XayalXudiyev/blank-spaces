import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQData = [
    {
        id: "item-1",
        question: "Is Blankspace easily accessible by public transport, and does it offer parking facilities?",
        answer: (
            <>
                <p>
                    - Yes, Blankspace is conveniently accessible via multiple public transportation options. 
                    Bus services such as lines 56, 60, 63, 64, 59, and 79 serve nearby stops, while metro lines 1 and 5 
                    provide easy connectivity through Schuman and Maelbeek stations. Additionally, Schuman station offers 
                    train connections, making it convenient for guests arriving from different locations.
                </p>
                <p>
                    For those driving, parking is available on the street and in the surrounding neighborhood, with 
                    Interparking Arts-Loi within walking distance for added convenience.
                </p>
            </>
        ),
    },
    {
        id: "item-2",
        question: "How does Blankspace manage crowd control to prevent overcrowding at events?",
        answer: (
            <p>
                - We carefully monitor our venue capacity and provide various layout options to ensure a comfortable experience for all guests. 
                Our events team (events@blankspace.brussels) assists in planning the best seating and space arrangements to prevent overcrowding.
            </p>
        ),
    },
    {
        id: "item-3",
        question: "What amenities and services are included in the venue rental price?",
        answer: (
            <>
                <p>
                    - Our venue rental includes high-quality audiovisual equipment, modern decor, and versatile seating arrangements 
                    to ensure a seamless event experience. Guests have access to a variety of indoor and outdoor furniture, including 
                    chairs, tables, and baby chairs upon request. The venue is also equipped with Samsung Smart TVs, a projector, 
                    Sonos speakers, a flipchart, and karaoke equipment for entertainment and presentations.
                </p>
                <p>
                    For catering needs, we provide a complete selection of glassware, cutlery, and crockery, including wine glasses, coffee cups, 
                    stainless steel cutlery, and porcelain plates. Additional furniture and equipment can be arranged upon request to accommodate 
                    specific event requirements.
                </p>
            </>
        ),
    },
    {
        id: "item-4",
        question: "Does Blankspace offer in-house catering, or can we bring our own caterers?",
        answer: (
            <p>
                - We provide premium in-house catering services with a range of menu options. 
                However, we also allow external caterers if you have specific preferences, subject to our catering guidelines.
            </p>
        ),
    },
    {
        id: "item-5",
        question: "How does Blankspace ensure cleanliness and maintenance before and during events?",
        answer: (
            <p>
                - Our venue is professionally cleaned before every event, and we have on-site staff to ensure cleanliness is maintained throughout. 
                We also conduct regular maintenance to keep our facilities modern and up to date.
            </p>
        ),
    },
    {
        id: "item-6",
        question: "How new is the furniture and equipment at Blankspace?",
        answer: (
            <>
                <p>
                    - At Blankspace, we take pride in offering high-quality, modern, and well-maintained furniture and equipment for all events. 
                    We completed a full renovation in 2024, and all our furniture, cutlery, audiovisual equipment, and other event essentials 
                    were newly purchased in 2024. This ensures that everything is in pristine condition, stylish, and up to the latest standards 
                    in comfort and functionality.
                </p>
                <p>
                    Our guests can expect fresh, clean, and contemporary furnishings, making every event feel elegant and professional.
                </p>
            </>
        ),
    },
];

const FAQ = () => {
    return (
        <div className="w-full py-10">
            <h2 className="text-[2rem] font-proximanova3 text-center py-4">Frequently Asked Questions</h2>
            <Accordion type="multiple" className=" flex flex-col w-[46%]  mx-auto">
                {FAQData.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="w-full text-">
                        <AccordionTrigger className="font-proximanova4 text-[22px] py-4  leading-7 gap-3 text-[#4A4A4A] hover:no-underline text-start">{faq.question}</AccordionTrigger>
                        <AccordionContent className="font-proximanova3 flex flex-col gap-y-5 pr-10 font-thin  leading-[18px]">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQ;
