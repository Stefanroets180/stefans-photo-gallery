import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const urbanPhotos = [
  {
    id: "1",
    title: "City Skyline",
    src: "https://your-s3-bucket.s3.amazonaws.com/urban/skyline.jpg", // Replace with your S3 URL
    width: 1200,
    height: 800,
    alt: "Modern city skyline at night",
  },
  {
    id: "2",
    title: "Street Photography",
    src: "https://your-s3-bucket.s3.amazonaws.com/urban/street.jpg", // Replace with your S3 URL
    width: 800,
    height: 1200,
    alt: "Busy street in a major city",
  },
  {
    id: "3",
    title: "Urban Architecture",
    src: "https://your-s3-bucket.s3.amazonaws.com/urban/architecture.jpg", // Replace with your S3 URL
    width: 1000,
    height: 1500,
    alt: "Modern architectural building",
  },
  {
    id: "4",
    title: "Subway Station",
    src: "https://your-s3-bucket.s3.amazonaws.com/urban/subway.jpg", // Replace with your S3 URL
    width: 1600,
    height: 900,
    alt: "Underground subway station",
  },
  {
    id: "5",
    title: "City Park",
    src: "https://your-s3-bucket.s3.amazonaws.com/urban/park.jpg", // Replace with your S3 URL
    width: 800,
    height: 1200,
    alt: "Urban park surrounded by skyscrapers",
  },
  {
    id: "6",
    title: "Night Market",
    src: "https://your-s3-bucket.s3.amazonaws.com/urban/market.jpg", // Replace with your S3 URL
    width: 1200,
    height: 800,
    alt: "Vibrant night market in the city",
  },
]

export default function UrbanPage() {
  return <MasonryGrid photos={urbanPhotos} category="Urban" />
}

