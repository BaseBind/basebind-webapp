import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { TITLE_TAILWIND_CLASS } from "@/utils/constants"

export function AccordionComponent() {
    return (
        <div className="flex flex-col w-[70%] lg:w-[50%]">
            <h2 className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold text-center tracking-tight dark:text-white text-gray-900`}>
                Frequently Asked Questions (FAQs)
            </h2>
            <Accordion type="single" collapsible className="w-full mt-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger><span className="font-medium">What is BaseBind?</span></AccordionTrigger>
                    <AccordionContent>
                        <p>It is a decentralized storytelling platform where you can read and publish stories secured on the blockchain.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger><span className="font-medium">Do I need experience with blockchain to use this platform?</span></AccordionTrigger>
                    <AccordionContent>
                        <p>No, the platform guides you through wallet setup and transactions, making it easy for beginners</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger><span className="font-medium">How do i publish my story?</span></AccordionTrigger>
                    <AccordionContent>
                        <p>Write your story on our platform, then publish it. Your story's content is securely stored and recorded on blockchain to prove ownership.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger><span className="font-medium">Is all content free to read?</span></AccordionTrigger>
                    <AccordionContent>
                        <p>Many stories are free, but some premium content requires token payment via blockchain.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger><span className="font-medium">How do I pay for premium stories?</span></AccordionTrigger>
                    <AccordionContent>
                        <p>You'll use your blockchain wallet to send tokens securely and transparently to the author via smart contracts.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger><span className="font-medium">What blockchain does the platform use?</span></AccordionTrigger>
                    <AccordionContent>
                        <p>We use Base chain to ensure secure, transparent transactions.</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
