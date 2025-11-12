export const socialLinks = {
  github: {
    url: "https://github.com/JDSalisbury",
    label: "GitHub",
    platform: "github"
  },
  linkedin: {
    url: "https://www.linkedin.com/in/jeffery-salisbury/",
    label: "LinkedIn",
    platform: "linkedin"
  },
  facebook: {
    url: "https://www.facebook.com/jeffery.salisbury.7/",
    label: "Facebook",
    platform: "facebook"
  },
  twitter: {
    url: "https://twitter.com/JDSalsy",
    label: "Twitter",
    platform: "twitter"
  },
  instagram: {
    url: "https://www.instagram.com/jeffsalsy/",
    label: "Instagram",
    platform: "instagram"
  }
};

// Helper to get primary social links (used in hero section)
export const primarySocialLinks = [
  socialLinks.github,
  socialLinks.linkedin
];

// Helper to get all social links (used in footer)
export const allSocialLinks = [
  socialLinks.github,
  socialLinks.linkedin,
  socialLinks.facebook,
  socialLinks.twitter,
  socialLinks.instagram
];
