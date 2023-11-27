export const scrollToAnchor = (anchorId: string) => {
  const element = document.getElementById(anchorId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth", 
      block: "start",
    });
  }
};

