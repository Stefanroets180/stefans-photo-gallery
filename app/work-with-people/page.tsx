import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const work_with_people_Photos = [
  {
    id: "1",
    title: "Studio Portrait",
    src: "https://stefanpix.imgix.net/run1.avif", // Replace with your S3 URL
    width: 800,
    height: 1200,
    alt: "Professional studio portrait",
  },
  {
    id: "2",
    title: "Environmental Portrait",
    src: "https://stefanpix.imgix.net/run2.avif", // Replace with your S3 URL
    width: 1200,
    height: 800,
    alt: "Portrait in natural environment",
  },
  {
    id: "3",
    title: "Street Portrait",
    src: "https://stefanpix.imgix.net/run3.avif", // Replace with your S3 URL
    width: 1000,
    height: 1500,
    alt: "Candid street portrait",
  },
  {
    id: "4",
    title: "J.P KFD ",
    src: "https://stefanpix.imgix.net/skate1.avif", // Replace with your S3 URL
    width: 1600,
    height: 900,
    alt: "Portrait showcasing cultural elements",
  },
  {
    id: "5",
    title: "Michele KFD",
    src: "https://stefanpix.imgix.net/skate2.avif", // Replace with your S3 URL
    width: 800,
    height: 1200,
    alt: "Dramatic black and white portrait",
  },
  // {
  //   id: "6",
  //   title: "Family Portrait",
  //   src: "https://your-s3-bucket.s3.amazonaws.com/portraits/family.jpg", // Replace with your S3 URL
  //   width: 1200,
  //   height: 800,
  //   alt: "Family portrait in outdoor setting",
  // },
]

export default function Work_With_People_Page() {
  return <MasonryGrid photos={work_with_people_Photos} category="Work With People" />
}

