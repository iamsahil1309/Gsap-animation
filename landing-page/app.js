
gsap.from("header", {
    duration : 1,
    y : -100,
    delay : 2,
})

gsap.to(".overlay", {
    duration : 2,
    x : "100%",
    delay : 1
})

const tl = gsap.timeline({
    repeat: -1
})
tl
   .from(".hero_sec_img_inner", {
      scale : 0,
      duration : 2,
      delay : 3,
      ease : Elastic.easeOut.config(2,1)
   })
  .from(".block1, .block3", {
    x: 200,
    duration: 1,
    delay: 1,
  })
  .from(
    ".block2, .block4",
    {
      x: -200,
      duration: 1,
    },
    "-=1"
  )

  .to(".block1, .block3", {
    x: 0,
    y: 100,
    duration: 1,
    delay: 1,
  })
  .to(
    ".block2, .block4",
    {
      x: 0,
      y: -100,
      duration: 1,
    },
    "-=1"
  )

  .to(".block1, .block3", {
    x: 0,
    y: 100,
    scaleX: -1,
    duration: 1,
  })
  .to(
    ".block2, .block4",
    {
      x: 0,
      y: -100,
      scaleX: -1,
      duration: 1,
    },
    "-=1"
  )

  .to(".block3", {
    x: 0,
    y: 100,
    scaleX: 1,
    duration: 1,
    delay: 1,
  })
  .to(
    ".block2",
    {
      x: 0,
      y: -100,
      scaleX: 1,
      duration: 1,
    },
    "-=1"
  )

  .to(".block1, .block3", {
    x: 0,
    y: 0,
    duration: 1,
    delay: 1,
  })
  .to(
    ".block2, .block4",
    {
      x: 0,
      y: 0,
      duration: 1,
    },
    "-=1"
  )

  .to(".block2", {
    x: 0,
    y: 0,
    scaleX: -1,
    duration: 1,
    delay : 1
  })
  .to(".block3", {
    x: 0,
    y: 0,
    scaleX: -1,
    duration: 1,
  },"-=1")

  .to(".hero_sec_img_inner", {
      scale : 0,
      duration : 2,
      delay : 1,
      ease : Back.easeIn.config(4)
   })