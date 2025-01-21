export const posts = [
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
      date: "2024-04",
      title: "community social status and the curious case of Degen 🎩",
      tags: ["crypto"],
      content: `In 2019, Eugen Wei published an incredible blog post titled "Status-as-a-Service". He analyzed how social media platforms act as status-generating services, where users perform activities to gain social capital, similar to a video game where status is the score.

## Algorithm as a Status Controller

We can view status as the currency of these social networks. On platforms like Twitter, likes, retweets, and follows are considered the ingredients of social status. Users create engaging tweets about news, culture, or entertainment and populate the town square of Twitter. In return, they gain followers which is akin to status.

Platforms control the distribution of status by managing the feed algorithm. They determine what content is seen and by whom. By designing these algorithms, platforms can influence which actions are rewarded with visibility. In response, users adjust their strategies to the algorithm to gain more status. The algorithm is the 'invisible hand' that exists in social media, dictating the fate of how social status is created or destroyed. Shadow banning, the practice of hiding a user's visibility from other users' feeds, is the secret weapon of social networks, allowing the platform to completely erase a user's social status.

## Social Status in Web3

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

### Buying vs. earning

However, there is one caveat to Degen status creation: you can buy Degen. Since the token is completely tradable, you can't really view Degen holdings as pure status because some might have been acquired organically and some might have been bought on the markets. It has yet to be known and explored how the tradability of Degen will impact its status formation, but there is a wide design space to explore which includes different tipping systems and their status creation capabilities (I list a few in the next section, such as soul bound tipping).

### Exploring New Ideas

We can play with the mechanism behind Degen to create a wide design space of external status creation systems. Here are some rough ideas that might be explored:

1. Other content-enhancing coins – Can we create an AI coin that gets tipped for excellent AI technical content? Or content about food for the foodies? How granular can we take the idea of content enhancement? Will we have tiny micro status communities in the future for every niche vertical?
2. Farcaster clients based on the Degen reputation system – create another client that prioritizes Degen holdings when deciding which content to show in the feed. This will be a Degen-first client, where the Degen community can have full control over curation. Should bought Degen receive the same weight as earned Degen?
3. Soul bound tipping (non-transferable tipping) – tip with coins in a non-transferable way, which could create a long-term social status for the address but also is less speculative and harder to bootstrap.

### Conclusion

It appears that Degen, although it started as a fun experiment, is a pioneering project in the creation and distribution of social status over the internet.

With the lightweight tipping system it created, it promotes independence from monolithic platforms and enhances user freedom. Once Farcaster has enabled open state to be read, it created room for creating new types of social status systems on top.

There is much more experimentation that should take place in the future around external status creation, and this is just the beginning. If you're working on something like this, make sure you ping me :)

Long live the Degens 🎩`,
    },
    {
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
      date: "2021",
      title: "Big Debt Crises",
      tags: ["reading"],
      content: `Ray Dalio takes you on a bottom-up journey, illustrating how macro cycles unfold and demonstrating the patterns of historical debt cycles in a rigorous and methodological way.

Link: <a href="https://www.bridgewater.com/big-debt-crises/principles-for-navigating-big-debt-crises-by-ray-dalio.pdf" target="_blank" class="underline">PDF</a>`,
    },
    {
      id: 15,
      date: "2021",
      title: "The Prince",
      tags: ["reading"],
      content: `This is a dark book written during the 16th century to serve as a guide for rulers. Despite its dark nature, it provides an excellent framework for strategic thinking.

Link: <a href="https://en.wikipedia.org/wiki/The_Prince" target="_blank" class="underline">Wikipedia</a>`,
    },
    {
      id: 16,
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
      id: 17,
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
      id: 18,
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
      id: 19,
      date: "2021",
      title: "The Music of Chance",
      tags: ["reading"],
      content: `This book explores some topics that I really like to think of: freedom, randomness, fate and control. It raises questions about the extent to which individuals can shape their own destiny and the role that luck and chance play in determining outcomes.

Notable quote:
"Once a man begins to recognize himself in another, he can no longer look on that person as a stranger."

Link: <a href="https://www.amazon.com/Music-Chance-Paul-Auster-ebook/dp/B00AFY9C2I" target="_blank" class="underline">Amazon</a>`,
    },
    {
      id: 20,
      date: "2021",
      title: "Dune",
      tags: ["reading"],
      content: `The Dune universe explores many fascinating aspects of human existence, including power struggles and politics, the relationship between humans and the environment, colonization and imperialism, religion and community.

Notable quote:
"I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain."

Link: <a href="https://www.amazon.com/Dune-Frank-Herbert-audiobook/dp/B000R34YKC" target="_blank" class="underline">Amazon</a>`,
    },
    {
      id: 21,
      date: "2021",
      title: "Shantaram",
      tags: ["reading"],
      content: `I traveled India when I was younger, and after reading Shantaram I felt sorry I didn't visit Mumbai. This book was so vivid, I can smell Mumbai and its scent although I have never been there.

Link: <a href="https://www.amazon.com/Shantaram-Novel-Gregory-David-Roberts/dp/0312330537" target="_blank" class="underline">Amazon</a>`,
    },
    {
      id: 22,
      date: "2021",
      title: "The Beginning of Infinity",
      tags: ["reading"],
      content: `Confession - I never finished reading this book. I'm constantly reading snippets of it and trying to process it in small pieces (there's a lot to think about). The philosophy of science, the creation of knowledge, the uniqueness of humans, and the universe - all of these topics provoke fascinating ideas. The thing I like the most about this book is the optimistic outlook by the author. So many 'smart people' are pessimistic about humanity's future, and its great to learn about well defined logical arguments that support the complete opposite - the future is bright, and we are actually just at the beginning of infinity.

Notable quote:
"Without error-correction all information processing, and hence all knowledge-creation, is necessarily bounded. Error-correction is the beginning of infinity."

Link: <a href="https://www.amazon.com/Beginning-Infinity-Explanations-Transform-World/dp/0143121359" target="_blank" class="underline">Amazon</a>`,
    }
]
  