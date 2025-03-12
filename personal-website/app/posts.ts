export const posts = [
    {
      id: 37,
      date: "2025",
      title: "OpenCommerce Substack - Autonomous Payments",
      tags: ["ai"],
      content: `<a href="https://substack.com/@opencommerce?utm_source=activity_item" target="_blank">https://substack.com/@opencommerce</a>`,
    },
    {
      id: 1,
      date: "2024-01-16",
      title: "Liquid Restaking Tokens (LRTs) market dynamics",
      tags: ["X"],
      content: `<a href="https://x.com/0xidanlevin/status/1747131804459377019" target="_blank">`,
    },
    {
      id: 2,
      date: "2023-08-13",
      title: "Understanding stablecoins strategy",
      tags: ["X"],
      content: `<a href="https://x.com/0xidanlevin/status/1690626493209038849" target="_blank">`,
    },
    {
      id: 3,
      date: "2022-07-05",
      title: "DeFi yields and the market for lemons 🍋",
      tags: ["X"],
      content: `<a href="https://x.com/0xidanlevin/status/1522982920956354561?s=20" target="_blank">`,
    },
    {
      id: 4,
      date: "2022-06-26",
      title: "Why is DeSci the next big thing ?",
      tags: ["X"],
      content: `<a href="https://x.com/0xidanlevin/status/1541047522088472578" target="_blank">`,
    },
    {
      id: 5,
      date: "2022-04-10",
      title: "The hidden price of algorithmic stablecoins",
      tags: ["X"],
      content: `<a href="https://x.com/0xidanlevin/status/1514502671142735872" target="_blank">`,
    },
    {
      id: 6,
      date: "2022-03-16",
      title: "The web3 browser wars",
      tags: ["X"],
      content: `<a href="https://x.com/0xidanlevin/status/1504164395445854214" target="_blank">`,
    },
    {
      id: 7,
      date: "2022-03-01",
      title: "Wallet-to-wallet messaging - why is that the next web3 big thing?",
      tags: ["X"],
      content: `<a href="https://x.com/0xidanlevin/status/1498607358464909315" target="_blank">`,
    },
    {
      id: 8,
      date: "2022-01-20",
      title: "The Transaction Quality Trilemma",
      tags: ["X"],
      content: `<a href="https://x.com/0xidanlevin/status/1484162063492653064" target="_blank">`,
    },
    {
      id: 9,
      date: "2021-10-25",
      title: "Why is DeFi going to eat the world?",
      tags: ["X"],
      content: `<a href="https://x.com/0xidanlevin/status/1452633199021068292" target="_blank">`,
    },
    {
      id: 10,
      date: "2022-07-31",
      title: "the toys will be tokenized first",
      tags: ["crypto"],
      content: `### TL;DR

1.  Everyone loves toys
2.  Toys are easy to tokenize, because (i) they don't hold legal fees and potential legal liabilites 
    (ii) no one expects nothing from them other than to have fun
3.  Conclusion: the toys will be tokenized first 

> "the next big thing will start looking like a toy" 
(Chris Dixon)

### The tokenization of everything

The concept of the tokenization of everything was a prevalent thesis in crypto during 2017/18. Yet, during the last crypto cycle of 2021, this term wasn't mentioned as much.

This thesis broadly posits that in the same way the internet shifted the world from being offline to online, blockchains will transform the world from being off-chain to on-chain. In practical terms, this indicates we should see the tokenization of real-world assets. Assets like real estate, stocks, bonds, and any physical asset could gain digital representations on blockchains as tokens. I aim to explain why this thesis hasn't fully materialized yet, and how I envision it most likely playing out in the coming years.

The concept of tokenizing everything does make a lot of sense. Using blockchains like Ethereum, one can have 24/7, permissionless global markets that are composable and standardized. They're open to everyone worldwide, maintaining neutrality without ownership by any specific nation state. This represents the most compelling embodiment of the globalization vision - global neutral markets serving everyone.

Over the past two years, DeFi protocols have demonstrated that we can construct financial primitives we know from traditional finance on blockchains, such as exchanges, swaps, borrowing and lending markets, and derivatives.

We've seen they can operate at scale without breaking down, even under extraordinarily high usage and adverse conditions. They provide a robust system for tracking valuable assets. For instance, Ethereum settled $11.6 trillion in 2021, more than Visa.

This vision for the tokenization of everything is undeniably captivating. Yet, if I'm being pragmatic, we're not yet seeing many signs of this occurring. Currently, the only tokenized asset at scale is probably backed stable coins, with assets like USDC. USDC, a tokenized dollar, is operated by the company Circle. They lock dollars in a bank account and create a 1:1 token representation of a dollar on the blockchain called USDC. Right now, approximately $55 billion dollars of tokenized USDC dollars exist, alongside others such as Tether. But that's about it. No other real-world assets are tokenized at scale.

So why hasn't this thesis fully materialized yet? Let's explore why, starting with an example.

If someone wishes to tokenize a real-world asset, say a building they own in Tel Aviv, they'd want to create a digital token that represents ownership in that building. The token should be transferable and compatible with any DeFi tool like decentralized exchanges. Perhaps you'd want to use this token as collateral and borrow against it. Hence, it should be compatible with DeFi tooling.

This person faces two primary challenges:

**High legal friction and costs**: Ownership of real estate is managed locally by nation states via somewhat isolated databases of property ownership, each with its unique set of rules. If I own a building in Tel Aviv, there's a record with my name in the database of the Israeli Land Authority stating my ownership. To transfer this building, I need to comply with their rule set. They might require the asset transferee to be an Israeli citizen or undergo a complicated KYC process, among other rules. If I want to tokenize real-world assets, I inherit the properties and rules that these assets comply with. Therefore, I need the original rule set owner's consent for a digital blockchain transfer to be acknowledged as a valid transfer. Even if authorities were open to the tokenization of real-world assets, which is generally not the case due to lack of understanding of blockchain systems, the process would be costly and set a high threshold for asset tokenization.

**Lack of users**: Even after overcoming legal costs and friction, the next hurdle is the lack of users. Few people want to invest in real estate on the blockchain. Traditional real estate investors generally don't grasp the concept, often finding it odd and unclear.

This creates a classic chicken and egg problem. The vision of tokenization is compelling, but factoring in the legal costs and lack of users, how exactly do we practically transition to tokenizing everything? How do we progress from point A to point B?

I believe there's a way this could unfold, and I want to share a mental model to help envision how this can happen. I'll use two examples: Unisocks and a startup called Blockbar.

## Unisocks

In 2019, Uniswap, currently the largest decentralized exchange, created 500 SOCKS tokens. The idea was that these tokens were "backed" by an equal number of physical, limited-edition pairs of socks. Unisock holders could convert their tokens into socks by redeeming them, effectively taking them out of circulation. Unisocks was a great success, trading at a peak of over $150 thousand per pair of socks, and generating millions in trading volume.

This was undoubtedly taken to an extreme with speculation, but I see no regulator chasing after tokenized sock creators. Hence, we have a perfect example of a tokenized digital artifact, free from legal costs, with speculation bootstrapping demand.

## Blockbar

Blockbar is a startup that lets you purchase tokenized, high-end spirit bottles. They auction rare bottles such as 1973 Glenfiddich single malt scotch whisky, providing a redeemable NFT as a claim on the actual bottle. The NFT is fully backed, while the physical bottle is securely stored on their premises.

Blockbar collaborates with well-known brands like Glenfiddich, Hennessy, and Johnnie Walker. Tokenizing spirits is another excellent example of something regulators like the SEC don't care about, and that people enjoy speculating with.

What I am attempting to convey is that we should start with tokenizing things that are easy to tokenize—the low-hanging fruit of tokenization.

Things that are easy to tokenize are those that regulators like the SEC don't care about. These are items with no legal costs or friction associated with their tokenization; they're toys in the eyes of regulators.

Chris Dixon has a famous quote: "the next big thing will start looking like a toy". This concept will be taken to the extreme in cases like Unisocks.

When you tokenize toys, you overcome the problems of tokenization - no legal friction or costs - and you can bootstrap demand with speculation. Speculation for toys is easy, simple, and doesn't require investors to adopt your technology. People will participate because it's fun.

Adoption in crypto doesn't start with the obvious use cases. It begins with the sidelines and speculation, then creates a rapid feedback loop, generating demand for tooling, which in turn creates more use cases and attracts more users.

At a later stage, this will enable real estate to enter the blockchain.

Adoption starts from things like Unisocks and whisky bottles and culminates with real estate and other real-world assets.

Obvious use cases are trading cards, collectibles, spirit bottles, expensive watches, and potentially cars at a later stage. The more toys get tokenized, the more infrastructure will be built, and the more users will adopt the core tech.

I believe we will see a lot of real-world assets get tokenized in the next few years - but they won't be real estate or traditional assets with complex legal structures embedded in them.

The toys will be tokenized first.`,
    },
    {
      id: 11,
      date: "2023-07-04",
      title: "preventing restaking centralization risks",
      tags: ["crypto"],
      content: `// ... existing code ...`,
    },
    {
      id: 12,
      date: "2023-08-31",
      title: "The future of Information Society Operating System (ISOS)",
      tags: ["crypto"],
      content: `// ... existing code ...`,
    },
    {
      id: 13,
      date: "2023-11-23",
      title: "The Crypto Casino and Tech Ark Dichotomy",
      tags: ["crypto"],
      content: `// ... existing code ...`,
    },
    {
      id: 14,
      date: "2023-12-18",
      title: "educating markets",
      tags: ["crypto"],
      content: `// ... existing code ...`,
    },
    {
      id: 15,
      date: "2023-12-25",
      title: "modular vs. monolithic",
      tags: ["crypto"],
      content: `// ... existing code ...`,
    },
    {
      id: 16,
      date: "2024-01-04",
      title: "why prediction markets don't work",
      tags: ["crypto"],
      content: `// ... existing code ...`,
    },
    {
      id: 17,
      date: "2024-02-09",
      title: "Chinese Whispers, Trust Entropy, and Why Blockchains Matter",
      tags: ["crypto"],
      content: `"Chinese Whispers," also known as "Broken Telephone," is a popular children's game that demonstrates how easily information can become distorted when passed through a series of individuals. The game typically involves participants sitting in a circle or a line. The first person thinks of a message and whispers it to the next person, who then passes it on. As the message travels, it often becomes garbled and significantly changes from the original. The final version, announced by the last person, is usually very different from the initial one, and in some cases unrecognizable. 

This game illustrates "information entropy," a concept from mathematics and information theory coined by Claude Shannon in his 1948 paper "A Mathematical Theory of Communication." Information entropy measures the unpredictability in a set of outcomes. In Broken Telephone, each whisper introduces potential errors, increasing the entropy and distorting the original message. This process is akin to a compounding error rate, where noise increases with each transfer, eventually resulting in significant information loss.

But what does information entropy have to do with blockchains? Blockchains deal with trust (or, trustlessness), and if you'll think about it hard enough, you will recognize a close relationship between how information and trust behave. 

## Trust and society

Trust is fundamental in society. It's the confidence in the reliability and integrity of a person or system. We trust our cars, elevators, airplane manufacturers, and food producers. We trust societal rules to protect us from crime. 

Trust is essential, but it's also complex. Trusting someone or a system is a consequence of complex processes each of us is doing when underwriting our trust in another person or system. Humans also frequently use a 'delegation algorithm' – if others trust something, we're more likely to trust it too. The majority of things we trust in our day-to-day is a consequence of trust delegation, we actually verify very little things by ourselves in modern society (if you would try to, you probably won't have too much spare time to do anything rather verifying all day long). 

Trust is everywhere, and society can't function without it. A mental model that I like for trust, can be thought of as a **chain of components, each its own piece of trust**. In airplane manufacturing for example, this chain extends across various parties - manufacturers trust vendors to meet quality and safety standards. Airlines trust engineers and designers. Regulatory bodies develop safety standards, and passengers trust these authorities for aircraft safety. Trust also extends to airline staff, from pilots to maintenance crews.

![1](/entropy1.png){:.ioda}

 
## Trust and information

I've been playing with the idea that **trust is a derivative of information, sharing similar properties** for quite some time now. In a trust chain, each node 'passes' trust to the next one. However, like in Chinese Whispers, there's trust erosion with each transfer. A 'loss factor' or 'error rate' accumulates in the network. Because of that, longer trust chains based on pure human interaction get's weaker with size. This is an intuitive conclusion if you think of your daily life - It's easier to verify close interactions than distant ones.
For instance, consider the trust you place in a local restaurant versus a distant food manufacturer:

### Trusting a local restaurant:
1.	**Personal Experience**: You've eaten at this restaurant many times and consistently found the food to be delicious and high-quality. You might have met the owners and know who they are. 
2.	**Direct Observation**: You've witnessed the restaurant's cleanliness and the staff's meticulous care in food preparation and service.
3.	**Immediate Feedback**: The restaurant addresses any concerns or special requests right away, enhancing your trust in their service.

In this scenario, your trust in the restaurant is based on direct, repeated, and personal experiences. It's straightforward to verify because your interactions with the restaurant and its staff are regular and direct.

### Trusting a distant food manufacturer:

1.	**Lack of Personal Experience**: You've never visited the manufacturing facility, so you have no firsthand experience with the manufacturer's processes. You have no clue who are the shareholders of the company. 
2.	**No Direct Observation**: You're unable to see the product's creation, the working conditions, or the quality control measures firsthand.
3.	**Delayed or Limited Feedback**: Any issues you have with the product can only be addressed through customer service, which might be slow to respond or just not veru personal.

In this case, verifying the food manufacturer is much more challenging. You might rely on reviews, brand reputation, or certifications, but these are indirect ways of establishing trust. The physical and experiential distance introduces more variables and uncertainties, complicating the establishment of trust compared to the local restaurant scenario. I call this concept Trust Entropy. 

![1](/entropy2.png){:.ioda}

 
## Trust Entropy increases with the size of collaborating humans

Yuval Noah Harari, in his book "Sapiens," explains how humans scaled from small groups to nation-states using mechanisms like mass communication and shared culture. We've gotten a long way from painting stories on the cave wall – we can use mass communications like radio, TV, and the internet, to spread ideas and information across the world in the speed of light.
However, it seems like modern society faces a 'trust barrier.' With more information comes more fake news, more conspiracies, and more information warfare. It seems like at some point, trust is eroding.  It is no coincidence that public trust in governments is reaching historical lows. 


 ![1](/entropy3.png){:.ioda}

Source[^1]


**Beyond a certain point, trust doesn't scale with current technology**. The internet has brought us information efficiency, but it cannot scale trust by itself. Human collaboration is hindered by significant entropy in the trust chain, evident in societal distrust, from vaccine scepticism to conspiracy theories.

## 'Don't trust, verify'

'Don't trust, verify' is a phrase often heard in blockchain contexts. Public blockchains like Bitcoin and Ethereum allow users to verify the network state (e.g., Bitcoin holdings) independently by running their own nodes, reducing reliance on third parties, and shortening the trust chain.

However, using Bitcoin still involves trust in hardware manufacturers and internet providers, among other things. Blockchain technology requires less trust than traditional systems and shortens the trust chain (but doesn't eliminate it entirely, which is a common mistake maximalist do). Open-source smart contracts on Ethereum let users verify contracts logic directly. These contracts can replace many trust-dependent societal functions, allowing for shorter trust chains in international settlements, and collaboration across the internet with very low trust barriers. 

## Why Blockchains

Blockchains provide a verifiable database and logic, creating coordination systems that require far less trust than current mechanisms (I really like Chris Dixon definition: "blockchains are computers that can make commitments". This is another way of describing trust machines, because commitments = trust enabler). The internet scaled information transfer globally, but the trust component is still lacking. Blockchains matter because they fill this gap. Enhancing trust chains with math and cryptography avoids the errors of human trust transmission, as seen in Chinese Whispers. 
The idea is that humans don't have to build these long trust chains, that gets eroded through time. You can use blockchains to reduce the length of these chains or make them more robust. More verifiability means more trust, and more trust means more collaboration.

This is why I believe the blockchain is one of the greatest inventions of this century – it will enable us to collaborate on a whole new scale. The fight against trust entropy is here. We need blockchains to win.  




 <hr>


{: data-content="footnotes"}

[^1]: Source: https://www.pewresearch.org/politics/2023/09/19/public-trust-in-government-1958-2023/`,
    },
    {
      id: 18,
      date: "2024-04",
      title: "community social status and the curious case of Degen 🎩",
      tags: ["crypto"],
      content: `In 2019, Eugen Wei published an incredible blog post titled "Status-as-a-Service". He analyzed how social media platforms act as status-generating services, where users perform activities to gain social capital, similar to a video game where status is the score.

### Algorithm as a Status Controller

We can view status as the currency of these social networks. On platforms like Twitter, likes, retweets, and follows are considered the ingredients of social status. Users create engaging tweets about news, culture, or entertainment and populate the town square of Twitter. In return, they gain followers which is akin to status.

Platforms control the distribution of status by managing the feed algorithm. They determine what content is seen and by whom. By designing these algorithms, platforms can influence which actions are rewarded with visibility. In response, users adjust their strategies to the algorithm to gain more status. The algorithm is the 'invisible hand' that exists in social media, dictating the fate of how social status is created or destroyed. Shadow banning, the practice of hiding a user's visibility from other users' feeds, is the secret weapon of social networks, allowing the platform to completely erase a user's social status.

### Social Status in Web3

Web3 social networks innovate on the idea of status generation and control. Farcaster would probably be the best place to analyze and estimate today how web3 social networks will impact the distribution of online — or onchain — status in the future.

Farcaster is a relatively new, decentralized web3 social network that has shown solid growth in 2024. It grew from 2,000 active users at the beginning of the year to over 80,000 DAUs as of today, thanks to the introduction of Frames and channels, which were highly successful features that enabled developers to build 'mini-apps' on top.

The social graph and social activity in Farcaster are recorded on the protocol, a peer-to-peer network which holds the replicated state of the network. However, users usually interact with the protocol through the Warpcast client, which looks and feels much like the Twitter app but with additional features.

The team that created the Farcaster protocol also maintains Warpcast, where most of the activity occurs. This means that the population of the social graph on Farcaster, the protocol, happens mostly with the intent of the Warpcast client, which controls the algorithm. This is similar to web2, where the team controlling the client also controls the algorithm and status creation.

## The Curious Case of Degen

Degen began as a community coin for the Degen channel on Warpcast in January 2024. The community held a contest to choose a logo and branding, and the purple top hat was selected 🎩. The Degen token grew organically within Warpcast, with its first utility being a tipping system.

This system was straightforward—users could reply to casts with 'X $Degen' to indicate the tip they wanted to give. The offchain tipping system scanned Farcaster, summed up all the Degen tips, and airdropped them into the respective user's wallet (this type of experiment was also made in 2020 with the $MOON coin on r/CryptoCurrency under a community points product rolled out by Reddit. This product was sunset on Oct-23).

This was only possible because of the open nature of Farcaster; the network is always readable, and unlike other social networks that tightly control their APIs, an external system can always read the state of the network. This was also facilitated by every address in Farcaster being linked to a wallet address, making it easy to airdrop tokens to it.

The early Degen team made two brilliant decisions:

1. Users could tip without any wallet transaction, just by replying in casts (very low friction).
2. The Degen distributions were created out of thin air; every day users received an allowance, so it didn't feel like spending something, but rather like contributing to someone.

These two brilliant decisions created something entirely new, which is the subject I want to get to—a new social status distribution system.

## Degen as a Status Distribution Mechanism

One side effect of the Degen tipping system was that it created an alternate universe to distribute status on the Warpcast client, independent of the Warpcast feed algorithm. Tipping was permissionless, and suddenly there was another status creation game outside the control of Warpcast. Users that seek to play in the status generation game could now play two types of games - the traditional game, which is getting likes and follows on Warpcast, and the Degen game, which was writing content that the Degen community would reward with tips.

The status creation is so significant that after a user receives the Degen token (an ERC20), they completely control it and can port its status anywhere outside of the Farcaster ecosystem. Meaning, Degen social status is portable, unlike legacy status created in the web2 systems.

This created an external system that rewards users with social status for good content, which is outside the control of the core social media algorithm. This is only technically feasible because Farcaster is open, which explains why we don't really see these activities outside of web3.

So if I had to describe Degen from this standpoint, I would probably say:

"Degen is an autonomous social status network, governed by the Degen community, that creates portable social network status."

When I sent this post for review, I got some feedback that there is another angle to the Degen tipping game which is - Degen is more about paying for good content and less about social status. But because of the close relationship between writing good content and earning social status in the platform (in the form of followers, shares, and likes), I think it makes sense to think of Degen distribution as both a form of money and status, and you can almost use both of these interchangeably.

## Buying vs. earning

However, there is one caveat to Degen status creation: you can buy Degen. Since the token is completely tradable, you can't really view Degen holdings as pure status because some might have been acquired organically and some might have been bought on the markets. It has yet to be known and explored how the tradability of Degen will impact its status formation, but there is a wide design space to explore which includes different tipping systems and their status creation capabilities (I list a few in the next section, such as soul bound tipping).

## Exploring New Ideas

We can play with the mechanism behind Degen to create a wide design space of external status creation systems. Here are some rough ideas that might be explored:

1. Other content-enhancing coins – Can we create an AI coin that gets tipped for excellent AI technical content? Or content about food for the foodies? How granular can we take the idea of content enhancement? Will we have tiny micro status communities in the future for every niche vertical?
2. Farcaster clients based on the Degen reputation system – create another client that prioritizes Degen holdings when deciding which content to show in the feed. This will be a Degen-first client, where the Degen community can have full control over curation. Should bought Degen receive the same weight as earned Degen?
3. Soul bound tipping (non-transferable tipping) – tip with coins in a non-transferable way, which could create a long-term social status for the address but also is less speculative and harder to bootstrap.

## Conclusion

It appears that Degen, although it started as a fun experiment, is a pioneering project in the creation and distribution of social status over the internet.

With the lightweight tipping system it created, it promotes independence from monolithic platforms and enhances user freedom. Once Farcaster has enabled open state to be read, it created room for creating new types of social status systems on top.

There is much more experimentation that should take place in the future around external status creation, and this is just the beginning. If you're working on something like this, make sure you ping me :)

Long live the Degens 🎩`,
    },
    {
      id: 19,
      date: "2024-12-24",
      title: "Coinbase Will Control the Master Switch",
      tags: ["crypto"],
      content: `Tim Wu's The Master Switch lays out this narrative: every major communication technology—from telephony to radio to the internet—goes through a cycle from open and competitive to closed and tightly controlled. Initially, these systems are free-for-alls full of innovation, but over time, powerful actors emerge to consolidate and govern the network's future. Wu calls this eventual point of control the "master switch."

We've seen this dynamic unfold many times in history. AT&T for example benefited from an open communications environment that allowed it to gain scale and market share, then morphed into a regulated monopoly controlling the entire telephone network. Early radio and television followed a similar pattern, starting as vibrant and creative fields, only to become dominated by a few media giants. The pattern is clear: start open, end closed.

Blockchains seemed to at least start in a similar way to these cycles - open-source enthusiasts that build innovative tech. The early narrative was all about decentralization, permissionless innovation, and the absence of single points of control. And as the technology matures, it appears we're not escaping the cycle; we're replaying it. While Ethereum and other networks remain decentralized at the core, user experience, compliance, and regulation are pushing new entrants to deliver more accessible and trusted pathways, effectively wrapping blockchains in a friendly, integrated environment.

This is where Coinbase steps in. Much like how Theodore Vail worked with the government to cement AT&T's status (and was also very open and friendly to those building independent telephone networks, they could tap in the long-term lines of AT&T), Coinbase is doing the same with Base, their Layer-2 rollup. By presenting itself as safe, well-regulated, and user-friendly, Coinbase follows the same playbook: become the main entryway into the crypto economy. As Coinbase's influence grows, they can effectively shape the network's direction, governance, and standards—claiming the master switch for themselves.

When convenience, trust, and familiarity outweigh the complexities of decentralized alternatives, Coinbase's Base may become that modern-day master switch.`,
    },
    {
      id: 20,
      date: "2021",
      title: "The Sovereign Individual",
      tags: ["reading"],
      content: `I believe this book provides a great mental model of the economic future we will encounter in our lifetime. The Sovereign Individual explores the relationship between technological innovation and megapolitical structures (such as nation-states or the church before the 18th century). Many of the theories presented in this book were new to me, particularly regarding the relationship between how humans organize themselves in large groups and the return on violence (a term they use a lot) and technological innovation.

The book provides great examples of megapolitical shifs, such as how the invention of the printing press and gunpowder gave rise to the concept that we now know as nation-states.

I find the core idea in the book - that the invention of the transistor and the internet will fundamentally alter megapolitical structures highly likely. This suggests that during our lifetime, we are likely to witness a significant shift in the way humans collaborate on large scale groups, in a way we did not see before.

Notable quotes:
"Violence is the ultimate boundary force on behavior; this, if you can understand how the logic of violence will change, you can usefully predict where people will be dropping or picking up the equivalent of one-hundred-dollar bills in the future."

"In almost every competitive area, including most of the world's multitrillion-dollar investment activity, the migration of transactions into cyberspace will be driven by an almost hydraulic pressure—the impetus to avoid predatory taxation, including the tax that inflation places upon everyone who holds his wealth in a national currency."

<a href="https://www.amazon.com/Sovereign-Individual-Mastering-Transition-Information/dp/0684832720" target="_blank" class="underline">Link</a>`,
    },
    {
      id: 21,
      date: "2021",
      title: "The Denationalization of Money",
      tags: ["reading"],
      content: `This is one of the books that has influenced my economic thinking the most. In 1976, Hayek proposed something that is still considered highly radical today - the idea that governments should not control money, and should privatize it. This simple concept encompasses many ideas prevalent in the crypto industry today, such as the fear of centralizing forces in the era of the internet and AI, the ability to censor individuals outside the system, the coersive power of governments, and the impact of inflation as a form of taxation.

This book serves as a practical guide on how we can achieve a system of non-governmental money, even in a pre-commercial internet era. Masterpiece.

Notable quote:
"There is no answer in the available literature to the question why a government monopoly of the provision of money is universally regarded as indispensable. … It has the defects of all monopolies."

Link: <a href="https://en.wikipedia.org/wiki/The_Denationalisation_of_Money" target="_blank" class="underline">Wikipedia</a>`,
    },
    {
      id: 22,
      date: "2021",
      title: "The Use of Knowledge in Society",
      tags: ["reading"],
      content: `This is not actually a book but rather a profound paper by Hayek discussing how free markets and price systems serve as knowledge-transmitting systems. I believe that only a few modern economists truly grasp these concepts, which lay the groundwork for understanding why free price systems foster prosperity and why it is illogical for central banks to determine interest rates and the market value of money.

Notable quotes:
"Fundamentally, in a system in which the knowledge of the relevant facts is dispersed among many people, prices can act to coordinate the separate actions of different people in the same way as subjective values help the individual to coördinate the parts of his plan."

"To assume all the knowledge to be given to a single mind…is to disregard everything that is important and significant in the real world."

Link: <a href="https://en.wikipedia.org/wiki/The_Use_of_Knowledge_in_Society" target="_blank" class="underline">Wikipedia</a>`,
    },
    {
      id: 23,
      date: "2021",
      title: "Big Debt Crises",
      tags: ["reading"],
      content: `Ray Dalio takes you on a bottom-up journey, illustrating how macro cycles unfold and demonstrating the patterns of historical debt cycles in a rigorous and methodological way.

Link: <a href="https://www.bridgewater.com/big-debt-crises/principles-for-navigating-big-debt-crises-by-ray-dalio.pdf" target="_blank" class="underline">PDF</a>`,
    },
    {
      id: 24,
      date: "2021",
      title: "The Prince",
      tags: ["reading"],
      content: `This is a dark book written during the 16th century to serve as a guide for rulers. Despite its dark nature, it provides an excellent framework for strategic thinking.

Link: <a href="https://en.wikipedia.org/wiki/The_Prince" target="_blank" class="underline">Wikipedia</a>`,
    },
    {
      id: 25,
      date: "2021",
      title: "Zen and the Art of Motorcycle Maintenance",
      tags: ["reading"],
      content: `This is a classic book from 1974 by Robert M. Pirsig. It is a fictional autobiography of Pirsig, describing his journeys on a motorcycle with his son in the US (with some flashbacks to a side story).

The book explores the concept of 'quality.' It delves into what quality is and how it is defined, and whether we can accurately describe it. It uses the maintenance of the motorcycle as a metaphor to showcase different approaches to quality. The conclusion I drew from this book and trying to apply in my daily work is that quality is a middle ground between the 'romantic' approach (subjective) and the 'classical' approach (objective). The best outcomes in life come from the combination of rational thinking and emotions. There is a sweet spot, an equilibrium, in which quality lies.

Notable quotes:
"The Buddha, the Godhead, resides quite as comfortably in the circuits of a digital computer or the gears of a cycle transmission as he does at the top of a mountain or in the petals of a flower."

"The place to improve the world is first in one's own heart and head and hands, and then work outward from there."

"The truth knocks on the door and you say, 'Go away, I'm looking for the truth,' and so it goes away. Puzzling."

"Is it hard?' Not if you have the right attitudes. Its having the right attitudes thats hard."

Link: <a href="https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060589469" target="_blank" class="underline">Amazon</a>`,
    },
    {
      id: 26,
      date: "2021",
      title: "Almanack of Naval Ravikant",
      tags: ["reading"],
      content: `A genius can capture the complexities of life that are invisible to most of us, and serve it with simplicity. Once you read his words, you see things differently and can't go back ("It's the nature of truth that once you see it, you can't unsee it"). Read this book and learn about wealth and happiness.

Notable quotes:
"Escape competition through authenticity."

"Specific knowledge is found much more by pursuing your innate talents, your genuine curiosity, and your passion. It's not by going to school for whatever is the hottest job; it's not by going into whatever field investors say is the hottest."

"You're going to die one day, and none of this is going to matter. So enjoy yourself. Do something positive. Project some love. Make someone happy. Laugh a little bit. Appreciate the moment. And do your work."

Link: <a href="https://www.navalmanack.com/" target="_blank" class="underline">Website</a>`,
    },
    {
      id: 27,
      date: "2021",
      title: "Catch-22",
      tags: ["reading"],
      content: `Catch 22 has so many quotes that I admire. It effectively portrays the absurdity of war and highlights the illogical situations individuals face when entangled in a larger system.

Notable quotes:
"He was going to live forever, or die in the attempt."

"Insanity is contagious."

Link: <a href="https://www.amazon.com/Catch-22-50th-Anniversary-Joseph-Heller/dp/1451626657" target="_blank" class="underline">Amazon</a>`,
    },
    {
      id: 28,
      date: "2021",
      title: "The Music of Chance",
      tags: ["reading"],
      content: `This book explores some topics that I really like to think of: freedom, randomness, fate and control. It raises questions about the extent to which individuals can shape their own destiny and the role that luck and chance play in determining outcomes.

Notable quote:
"Once a man begins to recognize himself in another, he can no longer look on that person as a stranger."

Link: <a href="https://www.amazon.com/Music-Chance-Paul-Auster-ebook/dp/B00AFY9C2I" target="_blank" class="underline">Amazon</a>`,
    },
    {
      id: 29,
      date: "2021",
      title: "Dune",
      tags: ["reading"],
      content: `The Dune universe explores many fascinating aspects of human existence, including power struggles and politics, the relationship between humans and the environment, colonization and imperialism, religion and community.

Notable quote:
"I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain."

Link: <a href="https://www.amazon.com/Dune-Frank-Herbert-audiobook/dp/B000R34YKC" target="_blank" class="underline">Amazon</a>`,
    },
    {
      id: 30,
      date: "2021",
      title: "Shantaram",
      tags: ["reading"],
      content: `I traveled India when I was younger, and after reading Shantaram I felt sorry I didn't visit Mumbai. This book was so vivid, I can smell Mumbai and its scent although I have never been there.

Link: <a href="https://www.amazon.com/Shantaram-Novel-Gregory-David-Roberts/dp/0312330537" target="_blank" class="underline">Amazon</a>`,
    },
    {
      id: 31,
      date: "2021",
      title: "The Beginning of Infinity",
      tags: ["reading"],
      content: `Confession - I never finished reading this book. I'm constantly reading snippets of it and trying to process it in small pieces (there's a lot to think about). The philosophy of science, the creation of knowledge, the uniqueness of humans, and the universe - all of these topics provoke fascinating ideas. The thing I like the most about this book is the optimistic outlook by the author. So many 'smart people' are pessimistic about humanity's future, and its great to learn about well defined logical arguments that support the complete opposite - the future is bright, and we are actually just at the beginning of infinity.

Notable quote:
"Without error-correction all information processing, and hence all knowledge-creation, is necessarily bounded. Error-correction is the beginning of infinity."

Link: <a href="https://www.amazon.com/Beginning-Infinity-Explanations-Transform-World/dp/0143121359" target="_blank" class="underline">Amazon</a>`,
    },
    {
      id: 32,
      date: "2024-03-16",
      title: "Expensive networks are less open source",
      tags: ["crypto"],
      content: `Linus Torvalds, the creator of Linux, famously said, "Given enough eyeballs, all bugs are shallow." This quote highlights a key principle of open-source software: the more people who scrutinize a piece of code, the quicker and more effectively bugs and issues are identified and resolved. This concept underpins the open-source movement, which advocates for open access to source code and collaborative development as a path to more reliable and higher-quality software, in contrast to traditional closed-source methods.

In the blockchain world, a related concept involves the cost of running a full node. A full node typically means downloading the historical state, verifying it up to the current chain tip, and participating in real-time block reception and validation (not necessarily proposing blocks for network consensus). The cost of running a full node varies across different crypto networks, ranging from a few hundred dollars to millions.

The expense isn't just about hardware and maintenance; it's also about the complexity of the node software. I believe that the cost of running a full node is generally indicative of a network's openness or, more specifically, the applicability of Linus's rule. Low-cost nodes, which are more numerous and accessible, invite diverse participation. In contrast, networks with prohibitively expensive nodes often see participation limited to businesses, while affordable nodes attract hobbyists.

Hobbyists are crucial. They tend to be more neutral and openly critical. When the cost to run a node is low, a network is more likely to face scrutiny and attract a broader range of observers. Conversely, in networks where node operation is costly, only businesses with different incentives and motivations tend to participate.

This situation has two primary effects:

1. Bugs in network architecture take longer to be discovered.
2. The network may accumulate unaddressed risks over time.

The latter point relates to a lack of incentive for whistleblowing; the former, to the simple law of large numbers.

Consequently, I'm more cautious about networks with high participation costs. They require more time to prove their robustness, and they carry a higher risk of accumulating systemic issues. While high-cost networks can still function, when it comes to the robustness stemming from open-source development, I tend to trust architectures derived from networks with lower participation costs.`,
    },
    {
      id: 33,
      date: "2024-03-21",
      title: "Startup ideation and the quantum state",
      tags: ["blog_posts"],
      content: `Ideating startup ideas is sort of living in a quantum state. You need to live in the future, being able to see what's going to happen. But you also need to live in the current state, and see what is missing today.

You always have to live in these two states, which is extremely hard. If you get stuck in one specific state too much, you're in a problem – if you live too much in the future, you become not practical. You lose focus with the execution plan, and basically just float around in imagination. If you live too much in today, you don't have a north star.

There are a few tricks that you can pull on your mind to balance yourself out between these two states. The trick to be in today's state is being very active and participating in related activities. If you want to build an onchain commerce protocol on the blockchain, you need to use any commerce platform you can put your hands on. You need to experience this in a highly attentive mode, really sucking in every bit of the onchain commerce experience. You see what are the pain points, and you experience them with your hands. That will keep you grounded to what is real. That will keep you grounded on how many problems exist. That will show you how hard it is to build something meaningful. You will have to ask meaningful questions, like what is the go-to-market strategy? what are the pain points? how do I solve something meaningful tomorrow morning?

Being in the future is different. It is less obvious how to trick yourself into it, and there are fewer out-of-the-box solutions to inspire yourself to see the future. I like to read books and take walks, and when I do these two things enough, I feel myself transcending to the future quantum state. The kind of books I read are about technology or science fiction. I like books by deep thinkers. So in the case of building something onchain, "Read Write Own" by Chris Dixon is an example of a book that can inspire you (although it doesn't have to necessarily be on the subject you are building in). These books will help you see the big picture and connect it to your story.

I also like to take long walks or jog. These activities stimulate my brain, and combined with reading deeply, it balances living in the current state and help me transcend to the future state.

So in summary, you will need to balance yourself in the quantum state of today and the future. Being in today's state is being active. Being in the future is getting inspiration and letting your mind wander. Combining both is the way to navigate the idea maze.`,
    },
    {
      id: 34,
      date: "2024-05-20",
      title: "come for the memecoin, stay for the network",
      tags: ["crypto"],
      content: `I love the idea of business 'entry points' that Chris Dixon's famous blog post, <a href="https://cdixon.org/2015/01/31/come-for-the-tool-stay-for-the-network">'come for the tool, stay for the network'</a>, describes. The playbook of attracting users to some tool which gives them immediate benefit, and then building a network based on this attraction, always felt brilliant to me. Instagram is a famous example in which it started as a filter tool (single-player mode) and then extended into a social network (multiplayer mode).

I think this playbook happens in quite a similar way around crypto memecoins or generally speculation. Users that speculate on memecoins need to jump through some fiery hoops to get to the point where they can purchase the memecoins - they need to download a wallet, onramp (most new memecoins are not listed immediately on centralized exchanges), and learn to interact with the respective blockchain. A lot of time this also requires some degree of technical savviness, because these new memecoins are only available in new applications that live on the crypto frontier.

After this initial bootstrapping phase ('come for the memecoin'), there is a group of users that went through the learning curve of using the chain and its tooling, plus some initial liquidity they seeded. Because capital that flowed into the chain doesn't easily flow out, there is now some 'potential energy' in the chain in the form of educated users and some initial locked capital.

Builders looking to build some new blockchain apps now have a distribution of users they can interact with. Getting users that already onboarded the chain is much easier than persuading them to jump through the fiery hoops of the learning curve from scratch. So although memecoin speculation is a casino game, it does seed some potential in the respective chain. That is why for new blockchains without any substantial usage, becoming a short-term casino has some obvious benefits.`,
    },
    {
      id: 35,
      date: "2024-06-02",
      title: "Why I don't believe in monolithic blockchains (from first principles)",
      tags: ["crypto"],
      content: `Why I don't believe in monolithic blockchains?

Explaining from first principles:


1. Blockchains are computers.

2. Computer history has shown us that when you build more bandwidth, storage, and compute capacity, developers build more demanding apps and use these excess resources.

3. That is why, no matter how many transactions/gas you can process per second, if you're a successful blockchain, it will never be enough.

4. This will result in one of two scenarios: fees go up, or you need to increase hardware/networking requirements for nodes (which leads to centralization).

5. You can't solve this with gadgets like differential pricing for high-demand pieces of state. You just isolate the problem from interfering with other things (high-demand apps will still be expensive). It's still an issue.

6. All roads lead to execution sharding. Call it whatever you want (shards/rollups/subchains).

7. Once you go to sharding the execution and decoupling execution and consensus, what do you need for a base settlement layer?

8. But even before that, what don't you (really) need? - parallel execution, fancy networking gadgets, or some crazy VM.

9. What do you actually need? Heavy economic security, verifiability of every piece of the stack, heavy research on potential black swans and security risks, support for validation of shards/rollups state transitions, support for escape hatches to prevent censorship in rollups, and a code language that is battle-tested and free of bugs.

10. These things have massive network effects, and I don't think any other chain other than Ethereum is close to achieving these things. Does this make me a maxi? No. I thought about these things from the ground up, and if any other chain aims toward these futures, I'll be there to support it.

11. And lastly, where can I be wrong and where do other smart people disagree with me?

I think the nature of the disagreement lies in the core assumption of what a blockchain is. If you see it as a Nasdaq substitute or some purely financial system, then your mental model is: if I can get a blockchain to x TPS, I'm done. This point of view assumes there is a saturation point for demand, like Visa or Google queries, and once you reach it, demand will reach an equilibrium. I think this perspective comes from too much skeuomorphism around thinking of blockchains in the context of finance. But anyway, this is the core disagreement between monolithic and modular blockchains. If blockchains are computers, I think that monolithic blockchains will lose the battle of scaling. If blockchains are Visa substitutes, monolithic blockchains will win over the complex and fragmented modular blockchains.

Whatever the case, long live blockchains.`,
    },
    {
      id: 36,
      date: "2024-07-21",
      title: "(Import, Enrich, Export) Enriching Experiences with Farcaster Social Graph",
      tags: ["crypto"],
      content: `Farcaster offers a new way to enrich crypto financial experiences, whether it's buying physical items, digital items like NFTs, sports betting, or engaging in prediction markets. This allows for the integration of standalone web applications into a more socially interactive environment.

## Import, Enrich, Export

One of the key advantages of Farcaster is its open API, which stands in contrast to other social platforms that often try to lock users in. With Farcaster, you can always export data with an open API. The 'server-side' in Farcaster is a P2P network composed of hubs, and you can always find a hub that will provide the data, or run one yourself. This is the export side.

But the recent introduction of frames also allows for another interesting model, which is open import. You can take an existing web app, transition it into a Frame app, and publish it as a cast (today it is technically limited to the OpenGraph standard, but soon expected to be upgraded to iFrames which are more versatile).

Once you convert web apps into frames, something magical happens – you can enrich them with social data—such as likes, shares, and comments. A piece of the app can be added contextual social data when embedding them in Farcaster. Because the 'export' module is always on (no one can shut down the API), this makes for a powerful primitive that allows us to import, enrich, and export back the web app. This process takes a piece of static app with no social context and expands it with social knowledge and interactions. 

## The Potential of Open Import/Export

The openness of Farcaster's import/export functionality holds a really big potential. By enabling the enrichment of every application with social layers, Farcaster can make every app a social app. If you can convert it to a frame, you can enrich it. And export it back. This makes everything social.

![theme logo](/import.png){:.ioda}

## The Feedback Loop Between Import and Export

Farcaster's feedback loop mechanism can play a big role in expanding the social graph. The enriched data and user interactions feed back into the main UI, which creates new social experiences and more motivation to import apps as frames and strengthens the Farcaster social graph. As more applications are enriched and more interactions occur, the Farcaster social graph becomes more robust.

I wonder if this import, enrich, export model will be relevant to financial apps, or if it can be extended to many more use cases that are not financial in nature. For example, sharing an album as a frame, enriching it with social data, and exporting it back to the app. Eventually, this process could also work backwards, with the web app providing write capabilities that will feed the Farcaster social graph.

We are very early in exploring this primitive, and I'm excited to see where will it land in a few years from now!`,
    }
]
  