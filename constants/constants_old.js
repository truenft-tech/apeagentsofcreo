/*
  Hello, change the text inside these variables to update
  the content of the website.

  For images, you can type the path to a file inside
  the images folder in /public/images. To do that, 
  just type "/images/[imageName].extension" inside
  the variable. Otherwise, you can insert an url
  from a website, and in this case you need to include
  that domain in next.config.js

  Thank You!
*/

// ---GENERAL---
export const logo = "/images/agentLogo.png"
export const logoAlt = "ApeAgentsLogo"
export const mobileMenuHeading = "Useful Links:"

export const discordUrl = "https://discord.com/channels/951377318272700456/1064627646270550138"
export const instagramUrl = "#"
export const twitterUrl = "https://twitter.com/ApeAgentsOfCreo"
export const openSeaUrl = "#"

// ---NAVBAR---
export const pages = [
  { name: "Gallery", id: "#gallery" },
  { name: "Features", id: "#features" },
  { name: "Roadmap", id: "#roadmap" },
  { name: "Team", id: "#team" },
  { name: "FAQ", id: "#faq" },
]

// ---FOOTER---
export const permissions = "2022 Creoverse.org"

// ---HERO TEXT---
export const heading1 = "Ape Agents of Creo"
export const heading2 = "Founders of Creoverse"
export const description = `A First Edition Collection with True NFT Technology.
                            Feature Rich Roadmap. Rewards, Airdrops, VIP Passes, Giveaways and more.
                            Kickstart Fund Raising for Creoverse and HIGHLY collectible.`
export const btnText1 = "Join Discord"
export const btnText2 = "Mint Your Agent"

export const topCard = {
  name: "#8888",
  price: "25 SOL",
  btnText: "Buy Now",
  profile:
    "/images/pic1.png",
  image:
    "/images/pic1.png",
  btnUrl: "https://marketplace.truenft.tech/",
  alt: "Top Card",
  profileAlt: "My Profile 1",
}

export const backCard = {
  name: "#8258",
  price: "30 SOL",
  btnText: "Buy Now",
  profile:"/images/pic2.png",
  image:
    "/images/pic2.png",
  btnUrl: "https://marketplace.truenft.tech/",
  alt: "Back Card",
  profileAlt: "My Profile 2",
}

// ---GALLERY---
export const galleryHeading = "Gallery"
export const images = [
  {
    url: "/images/pic4.png",
    alt: "nft1",
  },
  {
    url: "/images/pic5.png",
    alt: "nft2",
  },
  {
    url: "/images/pic6.png",
    alt: "nft3",
  },
  {
    url: "/images/pic7.png",
    alt: "nft4",
  },
  {
    url: "/images/pic8.png",
    alt: "nft5",
  },
  {
    url: "/images/pic9.png",
    alt: "nft6",
  },
  {
    url: "/images/pic10.png",
    alt: "nft7",
  },
  {
    url: "/images/pic11.png",
    alt: "nf8",
  },
  {
    url: "/images/pic12.png",
    alt: "nft9",
  }
]

// ---FEATURES---
export const features = [
  {
    reversed: false,
    title: " >>> 11,500 Ape Agents <<<",
    description: `A Highly Collectible Historic 1st with REAL PURPOSE, MINT TIME BENEFITS. ON-GOING EXTRAS, GIVEAWAYS, HOLDER PRIVILAGES & MORE.
    Unleashing TRUENFT.TECH & CREOVERSE.ORG`,
    image:
      "/images/agentLogo.png",
    imageAlt: "1000+ FIgures Collection Image",
  },
  {
    reversed: true,
    title: "RARITY & DISTRIBUTION INFORMATION",
    description: `The MINT will be a HIDDEN mint. This means that nobody knows what has already been
      minted or what is left. Buyers will receive their NFTs in the blind and on the mint completion
      all will be revealed. The hash of every Ape Agent DNA will be available just before minting starts.
      This ensures that the order of minting or the attributes of any Ape Agent cannot be changed once minting
      is opened.`,
    image:
      "https://ouch-cdn2.icons8.com/v6BET7YrOgSq4VCaZKo2L6mVaGxu1oJ0aoH9NzGvKqk/rs:fit:1149:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTQw/LzVhYTljZWRhLTdm/ZjUtNDM1MC1hNjA0/LWU3OTc1NjZiYTJl/ZC5wbmc.png",
    imageAlt: "Unique Attributes Image",
  },
]

// ---ROADMAP---
export const roadmapHeading = "Roadmap. We'll Update this Regularly"
export const roadmapSteps = [
  {
    position: "NOW",
    title: "Announcements",
    description: `Articles and tweets go out explaining what, why & how TrueNFT.Tech, TNFTCoin, Ape Agents and Creoverse all come together
    to bring a new light to NFTs and Digital Assets.`,
  },
  {
    position: "NOW",
    title: "Discord Activities Begin",
    description: `Join the Ape Agents of Creo Discord Server. Everything you wanted to know and can now ask. Help build the community and share
    your ideas. The end goal is to create a community driven decentralised opensource web3 focused metaverse. Anyone and everyone can participate.`,
  },
  {
    position: "14th Feb",
    title: "Public Mint Opens",
    description: `The public mint will start and everyone will be able to mint an Agent or 3. No pre-sale, whitelists or special treatment for anyone.
    Everyone will have the same chances to mint a rare or not so rare NFT`,
  },
  {
    position: "TBA",
    title: "Public Mint End - Donation to CREOVERSE.ORG",
    description: `All Ape Agents are revealed. If you Minted some Ape Agents
    they'll suddenly change into the real thing and the fun begins. A large % of the net sales will be deposited in a designated wallet for the 
    purpose of kickstarting creoverse.org`,
  },
  {
   position: "TBA",
   title:  "Rarity Information and Sales Statistics Released",
   description: "As the title suggests. A comprehensive report of all Ape Agents showing rarity etc will be published.",
  }, 
  {
    position: "TBA",
    title: "Ape Agent 1st Holders Air Drop",
    description: `All Ape Agent holders will receive an airdrop of 1000$ in Creoverse Tokens.`,
  },
  {
    position: "TBA",
    title: "TNFTCoin Airdrop",
    description: `A second round of rewards for those who helped get the project this far. Ape Agents holders are invited
    to join True NFT Tech Discord where they can find out how to get the TNFTCoin wallet and then request another, YES another 
    airdrop. This time its TNFTCoin. 1000 TNFT for each Ape Agent holder.`,
  },
]

// ---TEAM---
export const teamHeading = "Team"
export const team = [
  {
    url: "/images/5ha2s6512x512.png",
    alt: "5ha2s6",
    username: "@5ha2s6",
    userLink: "https://twitter.com/5ha2s6",
  },
  {
    url: "/images/pic13.png",
    alt: "bob",
    username: "#",
    userLink: "#",
  },
  {
    url: "/images/pic14.png",
    alt: "dave",
    username: "#",
    userLink: "#",
  },
  {
    url: "/images/pic15.png",
    alt: "jane",
    username: "#",
    userLink: "#",
  },
  
]

// ---FAQ---
export const faqHeading = "Frequently Asked Questions"
export const faq = [
  {
    question: "What's so unique about this collection?",
    answer: `Ape Agents of Creo is the very first NFT collection that stores it metadata
              on Tnftcoin blockchain. Go to www.truenft.Tech to learn more. As NFT collections
              go, this means the collection is a first of a kind and therefore highly collectible`,
  },
  {
    question: "What else do I get for my money?",
    answer: `Everyone who buys an Ape Agent will get VIP access to www.creoverse.org members area
    where they can claim 1000 Creoverse Pounds. At a later stage, there will be another airdrop of 
    Tnftcoin for all buyers too.`,
  },
  {
    question: "Does the collection have further utility?",
    answer: `Yes, there is much planned for Ape Agents. The first is that 50% of the net total raised
    by the public mint will be donated to www.creoverse.org in order to provide a kickstart fund. Holders of 
    Ape Agents will all get a say in how the fund is used and what developements are paid for by the fund. Most of 
    what happens next will be determined by the community`,
  },
]
