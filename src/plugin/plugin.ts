async function bootstrap() {

  if (figma.editorType === "figma") {
    figma.showUI(__html__, {
      width: 800,
      height: 650,
      title: "My new Figma Plugin!",
    });
  } else if (figma.editorType === "figjam") {
    figma.showUI(__html__, {
      width: 800,
      height: 650,
      title: "My FigJam Plugin!",
    });
  }
}

bootstrap();
