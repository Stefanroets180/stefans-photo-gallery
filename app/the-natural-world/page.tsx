import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const the_natural_world_Photos = [
  {
    id: "1",
    title: "Coffee Bay",
    src: "https://stefanpix.imgix.net/coffebay1.avif", // Replace with your S3 URL
    width: 800,
    height: 1200,
    alt: "See landscape with rocks",
  },
    
]

export default function The_Natural_World_Page() {
  return <MasonryGrid photos={the_natural_world_Photos} 
                      category="The Natural World" />
}

