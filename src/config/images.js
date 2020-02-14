const img = path => `/img/${path}`;
const socialIcon = path => img(`social/${path}`);

export default {
  socialIcons: {
    github: socialIcon("github.svg"),
    codepen: socialIcon("codepen.svg"),
    dev: socialIcon("dev.svg"),
    linkedin: socialIcon("linkedin.svg")
  }
};
