import MasonryGrid from "@/components/masonry-grid"

// This would typically come from your API or CMS
const idea_driven_visual_storytelling_Photos = [
  {
    id: "1",
    title: "Coffee Bay",
    src: "url('/placeholder.svg?height=800&width=1200')", // Replace with your S3 URL
    width: 800,
    height: 1200,
    alt: "See landscape with rocks",
  },
    
]

export default function Idea_Driven_Visual_Storytelling_Page() {
  return <MasonryGrid photos={idea_driven_visual_storytelling_Photos}
                      category="Abstract Visual Storytelling" />
}

