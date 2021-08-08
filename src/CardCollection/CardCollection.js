import React from 'react'
import "./CardCollection.scss";
import Card from "../Card/Card";
function CardCollection() {
    return (
        <div className="CardCollection">
            <Card 
                image="/Image1.png"
                title_link="https://techcrunch.com/2020/07/23/augmented-reality-startup-mira-announces-10m-more-in-funding-from-sequoia-and-others/" 
                title_content="AR Startup Mira raises a fresh round of $10mn in funding from Sequoia" 
                date="Aug 02, 2020" 
                content="Mira, an LA-based hardware AR startup, announced on 23rd July that they have raised fresh rounds thanks to the company's Prism Pro headset. The headset boasts True AR capabilities and dumping spatial tracking and mapping, and opting instead to augment your vision with a heads-up display window. " 
                footer="Read more at TechCrunch"
            /> 
            <Card 
                image="https://cms.lenzgig.com/uploads/8eaea413c1804b76a01adf3c6acd8254.png"
                title_link="https://arinsider.co/2020/06/15/data-dive-snap-breaks-the-million-lens-barrier/"
                title_content="One Million lenses have been created on Snapchat"
                date="June 29,2020"
                content="In a huge leap for Augmented reality, creators have created 1 Million lenses on Snapchat! Which has driven 170 million daily active AR users. Also at the Snap Partner Summit 2020 they introduced Snap ML where developers can bring their own machine learning into Lens Studio to create even more immersive brand experiences."
                footer="Read more at AD reader"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/31e1d8663023414fbe260c7563969c60.png"
                title_link="https://www.theverge.com/2020/6/17/21294072/pokemon-smile-brushing-teeth-ar-augmented-reality-adventure"
                title_content="Pokémon Smile App uses AR to make brushing your teeth fun"
                date="June 29,2020"
                content="This app uses augmented reality as a ToothBrushing game designed to encourage kids to brush their teeth. Players help “rescue other Pokémon from cavity-causing bacteria” by brushing their teeth. If you brush away all the bacteria, you are rewarded by getting to catch the pokémon at the end. The Pokémon Company also released a sleep tracking game called Pokémon Sleep last year."
                footer="Read more at Verge"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/72a3ef1902384560952989aaf12b1346.png"
                title_link="https://www.theverge.com/2020/6/16/21293372/bose-augmented-reality-frames-glasses-over"
                title_content="Bose kills its AR Sound Project"
                date="June 29,2020"
                content="Bose is giving up on its augmented reality project, two years after debuting the idea at SXSW. Bose’s AR focused on sound rather than visuals. It established a $50 million fund for Bose AR developers. A Bose spokesperson told Protocol, Bose AR didn’t become what we envisioned."
                footer="Read more at the Verge"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/749f78c2db49429da121e51e9d2766dc.jpg"
                title_link="https://arinsider.co/2020/03/04/papa-johns-reaches-25-conversion-rate-with-ar-campaign/"
                title_content="Papa John Snapchat lens reached 25 percent conversion rate"
                date="March 14,2020"
                content="Papa John’s Valentine’s Day Snapchat lens campaign that promoted their heart shape pizzas in the U.S resulted in a conversion rate of 25 percent of lens viewers actually ordering the pizza while inside the Snapchat app. This conversion number is important because it shows AR’s effectiveness as an advertising medium leading to actual revenue dollars. "
                footer="Read more at AR reader"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/cfec0edb37024fe09a5bef9d04816d9c.jpg"
                title_link="https://www.digitaltrends.com/cool-tech/qwake-c-thru-ar-hud-firefighters/"
                title_content="AR eyepiece lets firefighters see through smoke"
                date="March 04, 2020"
                content="Qwake Tech's AR helmet helps firefighters see through smoke and get out of fire five times faster. According to Digital trends, the smart helmet, has a head-up display which fits over one eye within a firefighter’s breathing apparatus. This AR feed presents them with a video stream taken from an on-board thermal camera and then uses intelligent image recognition to show the outlines of objects and people in green"
                footer="Read more at Digital Trends"
            />
            <Card 
                image="	https://cms.lenzgig.com/uploads/b8aa5ae158014653be99a76fd73c53dc.jpg"
                title_link="https://www.vox.com/recode/2020/2/11/21121275/augmented-virtual-reality-hiring-software-engineers-hired"
                title_content="Interview demand for AR VR engineers has seen a 1400 percent growth"
                date="March 03,2020"
                content="According to job-matching site Hired, there has been a 1400% growth in the demand for AR/VR engineers in the past year. Vox says that the evidence of the growth can bee seen in the numbers “Facebook currently has more than 3,000 jobs on its career page with the term “AR/VR.” Apple, Amazon, Microsoft, and Google have a total of about 1,000...”"
                footer="Read more at Vox"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/553084f07cfe4fc798c82ba1b398c59e.jpg"
                title_link="https://techcrunch.com/2020/02/19/snap-accelerator-names-its-latest-cohort/"
                title_content="Yellow the accelerator by Snap announced the names of startups joining their current cohort"
                date="March 04.2020"
                content="10 companies have been selected to be part of Snap’s accelerator program. Snap will invest $150k in each team. The new batch has startup from places like London, Mexico City, Seoul, U.S and Lithuanian to name a few. One of the noteworthy startup is SketchAR, they are developing an AI-based mobile app for teaching drawing using augmented reality."
                footer="Read more at TechCrunch"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/aabf579c06c245debd64f169cd849e89.jpg"
                title_link="https://techcrunch.com/2020/02/13/apple-expands-quick-look-to-let-retailers-sell-things-directly-in-augmented-reality/"
                title_content="Quick Look by Apple lets retailers sell in AR directly via their website from the browser"
                date="March 03,2020"
                content="Now you can trigger AR experiences directly via the browser without the need of an app using Quick look. According to Apple “You can embed Quick Look views in your apps and websites to let users see incredible detailed renderings, including reflections of real world surroundings…” To enable this all the retailer has to do is provide a 3D model of the product and Apple uses ARKit to render it."
                footer="Read more at TechCrunch"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/73c9432ef59b41e888f050eed1c23f64.jpg"
                title_link="https://www.voguebusiness.com/technology/carlings-ar-t-shirt-instagram-digital-clothing"
                title_content="Clothing that can trigger an AR Instagram filter to populate graphics on a T shirt"
                date="March 02,2020"
                content="Carling, a Scandinavia clothing brand has launched a first of its kind digitally interactive t-shirt called the Last Statement. According to the brand “The Last Statement T-shirt takes a classic pillar of youth rebellion and reinvests it for the digital age. Through a custom version of Instagram/Facebook filters you can digital change the t-shirts design"
                footer="Read more at Vogue Business"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/bf0dce7f137f48658ab2603de31a3adb.jpg"
                title_link="https://www.forbes.com/sites/johnkoetsier/2020/02/27/lets-be-honest-the-augmented-reality-market-is-literally-all-about-the-smartphone-right-now/#40827b20118d"
                title_content="Handheld AR aka the Smartphone will dominate AR, not Smartglasses."
                date="March 02,2020"
                content="According to ABI Research, handheld augmented reality that is consumed via your smartphone or tablet will make up the vast majority of the device landscape and not smartglasses. Almost all the value will be driven via smartphones according to the report. By 2024 over 3500 million devices will drive the Handheld AR revolution giving the AR market a US$100Bil valuation."
                footer="Read more at Forbes"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/b66aa0172a314b958c232f0d5e65757e.jpg"
                title_link="https://arpost.co/2020/01/08/webar-adoption-going-mainstream-in-2020/"
                title_content="WebAR is going to be the gold standard for AR in 2020"
                date="March 02,2020"
                content="WebAR is an AR experiences that can be accessed via your browser without the need of an app. Coca-Cola’s campaign allows users to scan a QR code on the packing of their product to launch a branded face filter without the need to download an app. These types of WebAR experiences will grow in popularity with the spread of the 5G network."
                footer="Read more at AR Post"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/b6276e1ff73a47bc8043a02ae274ab41.jpg"
                title_link="https://medium.com/@MrNeilGupta/apple-released-another-part-of-their-ar-headset-4aded6a921a2"
                title_content="AirPods could be Apple's first step towards Augmented Reality"
                date="February 20,2020"
                content="AirPods and its always on voice activated Siri function could be Apple’s first step to augment the world around you. Apple seems to be selling their AR in a suite of wearables. AirPods Pro’s wireless, active noise cancelation and transparency mode to augment your audio, Apple Watch to capture gestures, iPhone for computing and possibly eyewear for augmenting your visual reality."
                footer="Read more at"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/98c69246b4504927a351e9465aabedd5.jpg"
                title_link="https://www.protocol.com/daqri-snap-ar-failure"
                title_content="The Death of Daqri, the AR Startup that raised $300M in funding"
                date="February 20,2020"
                content="AR startup that created a retro-futuristic augmented reality helmet and raised $300M in funding has gone out of business. Daqri pivoted from a consumer facing company to a B2B company pitching to construction companies, machinery manufacturers, and the U.S. Navy. In the end Snapchat acquired pieces of the now defunct startup along with two-dozen employees "
                footer="Read more at Protocol"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/a2df89d1dcca4fbea272c9cea12fa74c.jpg"
                title_link="https://www.marketingdive.com/news/uber-eats-india-sees-1m-players-of-instagram-stories-ar-game/569736/?referrer_site=www.mobilemarketer.com"
                title_content="Uber Eats India gets 1 Million players on their Instagram AR Game, Eats in a Blink"
                date="February 25,2020"
                content="From December 16th to 24th 2019 Uber Eats India ran a contest on their Instagram page asking users to play their AR Instagram Game “Eats In A Blink” of which the the highest scorer would win free food for all of 2020 and the runner ups would win free food for 3 months."
                footer="Read more at Mobile Marketer"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/de5fa47e895047a2b5f160f27c7ed643.jpg"
                title_link="https://th3rdeyexr.com/verizon-snap-partner-for-5g-powered-marketing/"
                title_content="Snapchat and Verizon partner to bring 5G Ultra Wideband enabled AR to marketers"
                date="February 25,2020"
                content="Snapchat in collaboration with Verizon’s 5G Lab will develop unique AR experiences for consumers by taking advantage of the 5G Ultra Wideband’s low latency, fast speeds and high bandwidth. They will enable location-based entertainment experiences and Portal Lenses that can transport fans backstage at a concert or provide spectators unique in-stadium experiences from their seat during the game.&nbsp;"
                footer="Read more at TH3RDEYE"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/62f43c8dcbf64976b0150859d6c41c85.jpg"
                title_link="https://www.bbc.co.uk/rd/blog/2019-11-audio-augmented-reality-bose-frames-ar"
                title_content="Audio Augmented Reality In your headphones"
                date="February 25,2020"
                content="Spatial Audio is going to be a large part of the AR experience. Imagine trying to buy a washing machine in AR but now with Audio Augmented Reality (AAR) you can hear how loud the machine is while its running and you are standing next to it versus how it sounds when you are 10 feet away."
                footer="Read more at BBC"
            />
            <Card 
                image="https://cms.lenzgig.com/uploads/5b367ab39dac4aa7ac1089c6abc842a2.jpg"
                title_link="https://tomemrich.medium.com/20-augmented-reality-trends-to-keep-an-eye-on-in-2020-d2b0258edbb"
                title_content="Augmented Reality Trends of 2020"
                date="February 25,2020"
                content="Smartphones are introducing Time-of-flight sensors on their phones to improve the accuracy of AR. Mixed reality Smartglasses will hit the shelves driving early adoption. VR headset are going to double as AR displays. Various industries are going to build custom AR/MR experiences to suit their niche usecases. Browsers are going to be the gold standard for AR"
                footer="Read more at Medium"
            />
             
        </div>
    )
}

export default CardCollection;
