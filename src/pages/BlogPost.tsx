import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import blogSurvivorStory from "@/assets/blog-survivor-story.jpg";
import blogResearch from "@/assets/blog-research.jpg";
import blogPrevention from "@/assets/blog-prevention.jpg";
import blogMedicalInsights from "@/assets/blog-medical-insights.jpg";
import blogCommunity from "@/assets/blog-community.jpg";
import blogTreatment from "@/assets/blog-treatment.jpg";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: "Survivor Stories" | "Medical Insights" | "Research Updates" | "Prevention Tips";
  image: string;
  author: {
    name: string;
    role: string;
    bio: string;
    avatar?: string;
  };
  readTime: number;
  date: string;
  content: string[];
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "From Diagnosis to Recovery: Maria's Breast Cancer Journey",
    excerpt: "After her diagnosis, Maria found strength in community support and innovative treatment options. Her inspiring story shows the power of resilience and hope.",
    category: "Survivor Stories",
    image: blogSurvivorStory,
    author: {
      name: "Dr. Sarah Chen",
      role: "Oncologist",
      bio: "Dr. Sarah Chen is a board-certified oncologist with over 15 years of experience in breast cancer treatment. She is passionate about patient-centered care and has helped hundreds of patients navigate their cancer journey with compassion and expertise.",
    },
    readTime: 8,
    date: "March 15, 2024",
    featured: true,
    content: [
      "When Maria first received her breast cancer diagnosis, the world seemed to stop. Like many patients, she felt overwhelmed by fear and uncertainty. But her journey from that initial shock to recovery has become a testament to the power of modern medicine, community support, and personal resilience.",
      "Maria's story began with a routine mammogram that revealed an abnormality. Within days, a biopsy confirmed stage 2 breast cancer. 'I remember feeling like I was in a fog,' Maria recalls. 'But my oncologist, Dr. Chen, sat with me and my family for over an hour, explaining everything in detail and answering all our questions.'",
      "The treatment plan was comprehensive but carefully tailored to Maria's specific case. It included surgery, followed by chemotherapy and radiation therapy. Throughout the process, Maria found strength in unexpected places—from the nurses who held her hand during difficult treatments to the support group that met every Tuesday evening.",
      "One of the turning points came when Maria was introduced to a newer immunotherapy treatment that complemented her traditional care. 'The advances in cancer treatment are remarkable,' Dr. Chen explains. 'We're able to personalize treatment plans in ways that weren't possible even five years ago.'",
      "Today, two years after her diagnosis, Maria is cancer-free and has become an advocate for early detection and patient support. She volunteers at the same cancer center where she received treatment, offering hope and practical advice to newly diagnosed patients.",
      "'Cancer changed my life,' Maria says, 'but not in the way I feared. It taught me about strength I didn't know I had, introduced me to incredible people, and gave me a new purpose. I want every person facing this diagnosis to know that there is hope, and you don't have to face it alone.'",
      "Maria's journey reminds us that while cancer is a formidable challenge, it's one that can be overcome with the right medical care, support system, and determination. Her story continues to inspire patients and healthcare providers alike.",
    ],
  },
  {
    id: 2,
    title: "Breakthrough in Immunotherapy: New Treatment Options",
    excerpt: "Recent advances in immunotherapy are revolutionizing cancer treatment. Learn about the latest research and what it means for patients.",
    category: "Research Updates",
    image: blogResearch,
    author: {
      name: "Dr. Michael Torres",
      role: "Research Director",
      bio: "Dr. Michael Torres leads cancer research initiatives at our institution, focusing on immunotherapy and targeted treatments. With a Ph.D. in molecular biology and 20 years in cancer research, he has published over 100 peer-reviewed articles and led multiple clinical trials.",
    },
    readTime: 12,
    date: "March 10, 2024",
    featured: true,
    content: [
      "The landscape of cancer treatment is undergoing a revolutionary transformation, and immunotherapy is at the forefront of this change. Recent breakthroughs are offering new hope to patients whose cancers were previously considered difficult to treat.",
      "Immunotherapy works by harnessing the body's own immune system to fight cancer cells. Unlike traditional chemotherapy, which directly attacks cancer cells, immunotherapy trains the immune system to recognize and destroy cancer cells more effectively. This approach has shown remarkable success in treating various types of cancer, including melanoma, lung cancer, and certain types of lymphoma.",
      "One of the most exciting recent developments is the advancement of CAR-T cell therapy. This treatment involves extracting a patient's T cells, genetically modifying them to better recognize cancer cells, and then reinfusing them into the patient. The results have been nothing short of extraordinary, with some patients achieving complete remission after other treatments had failed.",
      "Another promising area is the development of immune checkpoint inhibitors. These drugs work by blocking proteins that prevent the immune system from attacking cancer cells. By removing these 'brakes' on the immune system, these inhibitors allow the body to mount a more effective anti-cancer response.",
      "The latest research also shows promise in combining different immunotherapy approaches or pairing immunotherapy with traditional treatments. These combination strategies are showing improved outcomes for many patients, particularly those with advanced cancers.",
      "However, it's important to note that immunotherapy isn't suitable for all patients or all cancer types. Ongoing research is focused on understanding why some patients respond better than others and how to predict which patients will benefit most from these treatments.",
      "As we continue to unlock the potential of the immune system in fighting cancer, the future looks increasingly bright. These treatments represent not just new options, but a fundamental shift in how we approach cancer care—one that offers hope where there was previously little.",
    ],
  },
  {
    id: 3,
    title: "10 Evidence-Based Ways to Reduce Cancer Risk",
    excerpt: "Discover scientifically proven lifestyle changes that can significantly lower your cancer risk. Simple steps for a healthier future.",
    category: "Prevention Tips",
    image: blogPrevention,
    author: {
      name: "Dr. Jennifer Adams",
      role: "Preventive Medicine Specialist",
      bio: "Dr. Jennifer Adams specializes in preventive medicine and lifestyle interventions for cancer prevention. She has dedicated her career to educating communities about evidence-based strategies for reducing cancer risk through diet, exercise, and healthy living.",
    },
    readTime: 6,
    date: "March 5, 2024",
    featured: true,
    content: [
      "While not all cancers can be prevented, research shows that up to 40% of cancer cases could be avoided through lifestyle changes and preventive measures. Here are ten evidence-based strategies that can significantly reduce your cancer risk.",
      "1. Don't use tobacco. Tobacco use is the single largest preventable cause of cancer, responsible for approximately 30% of all cancer deaths. Quitting smoking at any age can dramatically reduce your risk.",
      "2. Maintain a healthy weight. Obesity is linked to at least 13 types of cancer. Maintaining a healthy body weight through diet and exercise can significantly lower your risk.",
      "3. Be physically active. Regular physical activity is associated with reduced risk of several cancers, including breast, colon, and endometrial cancer. Aim for at least 150 minutes of moderate exercise per week.",
      "4. Eat a healthy diet. A diet rich in fruits, vegetables, whole grains, and lean proteins can help reduce cancer risk. Limit processed meats and red meat consumption.",
      "5. Limit alcohol consumption. Even moderate drinking increases the risk of several cancers. If you choose to drink, limit consumption to no more than one drink per day for women and two for men.",
      "6. Protect yourself from the sun. Use sunscreen, wear protective clothing, and avoid midday sun to reduce your risk of skin cancer, the most common type of cancer.",
      "7. Get vaccinated. Vaccines against HPV and Hepatitis B can prevent cancers associated with these viruses, including cervical and liver cancer.",
      "8. Get regular screenings. Early detection through screenings like mammograms, colonoscopies, and Pap tests can catch cancer early when it's most treatable.",
      "9. Avoid risky behaviors. Practice safe sex and don't share needles to reduce your risk of infections that can lead to cancer.",
      "10. Know your family history. Understanding your genetic risk can help you and your doctor develop an appropriate screening and prevention plan.",
      "Remember, these strategies aren't just about cancer prevention—they're about overall health and well-being. Making these changes can improve your quality of life in countless ways while reducing your cancer risk.",
    ],
  },
  {
    id: 4,
    title: "Understanding Targeted Therapy: A Patient's Guide",
    excerpt: "Targeted therapy represents a major advancement in cancer treatment. Here's what patients need to know about this personalized approach.",
    category: "Medical Insights",
    image: blogMedicalInsights,
    author: {
      name: "Dr. Robert Kim",
      role: "Medical Oncologist",
      bio: "Dr. Robert Kim is a medical oncologist specializing in precision medicine and targeted therapies. He has been at the forefront of implementing personalized cancer treatments and has helped develop treatment protocols for various cancer types.",
    },
    readTime: 10,
    date: "February 28, 2024",
    featured: true,
    content: [
      "Targeted therapy has revolutionized cancer treatment by focusing on the specific genetic mutations and molecular characteristics that drive cancer growth. Unlike traditional chemotherapy, which affects all rapidly dividing cells, targeted therapy zeroes in on cancer cells while largely sparing healthy tissue.",
      "At its core, targeted therapy works by interfering with specific molecules involved in tumor growth and progression. These therapies are designed based on a detailed understanding of the genetic and molecular profile of a patient's cancer.",
      "There are several types of targeted therapies currently in use. Some block the growth signals that tell cancer cells to divide and multiply. Others interfere with blood vessel formation, cutting off the tumor's blood supply. Still others deliver toxic substances directly to cancer cells or mark them for destruction by the immune system.",
      "The development of targeted therapies has been made possible by advances in genetic testing and molecular diagnostics. Before starting targeted therapy, patients typically undergo genetic testing of their tumor to identify specific mutations or biomarkers that can be targeted.",
      "One of the major advantages of targeted therapy is that it often causes fewer and different side effects compared to traditional chemotherapy. Because these drugs are designed to target cancer cells specifically, they generally cause less damage to healthy cells.",
      "However, targeted therapy isn't without challenges. Cancer cells can sometimes develop resistance to these treatments over time, and not all cancers have identifiable targets that can be treated with currently available therapies.",
      "The field of targeted therapy is rapidly evolving, with new drugs and treatment strategies being developed constantly. As our understanding of cancer biology deepens, we're able to develop increasingly precise and effective targeted treatments, bringing us closer to truly personalized cancer care.",
    ],
  },
  {
    id: 5,
    title: "Building a Support Network During Cancer Treatment",
    excerpt: "Community support plays a crucial role in cancer recovery. Learn how to build and maintain a strong support system.",
    category: "Survivor Stories",
    image: blogCommunity,
    author: {
      name: "Lisa Martinez",
      role: "Patient Advocate",
      bio: "Lisa Martinez is a cancer survivor and patient advocate who has dedicated her life to helping others navigate their cancer journey. She facilitates support groups and provides guidance on building effective support networks during treatment.",
    },
    readTime: 7,
    date: "February 20, 2024",
    featured: true,
    content: [
      "Facing cancer is one of life's greatest challenges, but no one should face it alone. Building a strong support network can make a significant difference in your treatment experience and overall well-being.",
      "Your support network might include family, friends, healthcare providers, support group members, and others who have faced similar challenges. Each person can play a unique role in helping you through your journey.",
      "Start by being honest about what you need. Some people struggle to ask for help, but remember that your loved ones want to support you—they just might not know how. Be specific about what would be most helpful, whether it's rides to appointments, help with meals, or just someone to talk to.",
      "Support groups, both in-person and online, can be invaluable. Connecting with others who truly understand what you're going through can provide emotional support, practical advice, and hope. Many cancer centers offer support groups, and there are numerous online communities as well.",
      "Don't forget about professional support. Social workers, counselors, and patient navigators can help you deal with the emotional and practical challenges of cancer treatment. Many cancer centers have these resources available at no cost to patients.",
      "It's also important to set boundaries. While support is crucial, you also need to protect your energy and well-being. It's okay to limit visitors or step back from certain obligations while focusing on your treatment and recovery.",
      "Remember that your support needs may change throughout your treatment. Stay flexible and don't hesitate to adjust your support network as needed. The goal is to create a system that truly helps you feel supported, loved, and empowered throughout your cancer journey.",
    ],
  },
  {
    id: 6,
    title: "Latest Advances in Radiation Therapy Technology",
    excerpt: "Modern radiation therapy is more precise and effective than ever. Explore the cutting-edge technologies improving patient outcomes.",
    category: "Research Updates",
    image: blogTreatment,
    author: {
      name: "Dr. Amanda Foster",
      role: "Radiation Oncologist",
      bio: "Dr. Amanda Foster is a radiation oncologist with expertise in advanced radiation techniques including IMRT, SBRT, and proton therapy. She has been instrumental in bringing cutting-edge radiation technologies to our cancer center.",
    },
    readTime: 9,
    date: "February 15, 2024",
    featured: true,
    content: [
      "Radiation therapy has come a long way from its early days. Today's advanced technologies allow us to deliver highly precise doses of radiation to tumors while minimizing damage to surrounding healthy tissue.",
      "One of the most significant advances is Intensity-Modulated Radiation Therapy (IMRT). This technique uses computer-controlled linear accelerators to deliver precise radiation doses to tumors. The intensity of the radiation beam can be adjusted across the treatment area, allowing for better targeting of irregularly shaped tumors.",
      "Stereotactic Body Radiation Therapy (SBRT) is another breakthrough technology. It delivers very high doses of radiation to small, well-defined tumors in just a few treatment sessions. This approach has shown excellent results in treating early-stage lung cancer and other localized tumors.",
      "Image-guided radiation therapy (IGRT) uses imaging scans before each treatment to ensure accurate targeting. This is particularly valuable for tumors that might shift position between treatments or during breathing.",
      "Proton therapy represents a quantum leap in radiation treatment precision. Unlike traditional radiation, which continues through the body, proton beams can be controlled to release their energy at a specific depth, reducing exposure to healthy tissue beyond the tumor.",
      "The integration of artificial intelligence and machine learning is also transforming radiation therapy planning. These technologies can help optimize treatment plans, predict outcomes, and even adjust treatments in real-time based on how the tumor responds.",
      "These advances mean that radiation therapy is now more effective and has fewer side effects than ever before. Patients can often maintain better quality of life during treatment, and the risk of long-term complications has been significantly reduced.",
    ],
  },
  {
    id: 7,
    title: "Nutrition During Cancer Treatment: Essential Guidelines",
    excerpt: "Proper nutrition is vital during cancer treatment. Get expert advice on maintaining strength and managing side effects through diet.",
    category: "Prevention Tips",
    image: blogPrevention,
    author: {
      name: "Emily Chen",
      role: "Clinical Nutritionist",
      bio: "Emily Chen is a registered dietitian and clinical nutritionist specializing in oncology nutrition. She works closely with cancer patients to develop personalized nutrition plans that support treatment and recovery.",
    },
    readTime: 8,
    date: "February 10, 2024",
    featured: true,
    content: [
      "Proper nutrition during cancer treatment is crucial for maintaining strength, supporting your immune system, and helping your body heal. However, treatment side effects can make eating challenging.",
      "Protein is particularly important during cancer treatment. It helps repair tissue, maintain muscle mass, and support immune function. Good protein sources include lean meats, fish, eggs, dairy products, beans, and nuts. Aim for protein at every meal and snack.",
      "Staying hydrated is also critical. Treatment side effects like nausea, vomiting, or diarrhea can lead to dehydration. Drink plenty of water throughout the day, and consider electrolyte-rich beverages if you're experiencing significant fluid loss.",
      "Many patients struggle with taste changes during treatment. Foods that once tasted good might now seem bland, metallic, or unpleasant. Experiment with different flavors and temperatures. Sometimes cold foods are easier to tolerate than hot foods.",
      "If nausea is an issue, try eating smaller, more frequent meals instead of three large ones. Bland foods like crackers, toast, or plain rice might be easier to tolerate. Ginger tea or ginger candies can also help settle your stomach.",
      "It's important to work with a registered dietitian who specializes in oncology nutrition. They can help you develop a personalized nutrition plan that addresses your specific needs, treatment side effects, and food preferences.",
      "Don't stress if you can't eat perfectly all the time. Do your best to maintain good nutrition, but remember that managing side effects and maintaining your strength is the priority. Some nutrition is always better than none.",
    ],
  },
  {
    id: 8,
    title: "Genetic Testing: Who Should Consider It and Why",
    excerpt: "Understanding your genetic risk for cancer can guide prevention and early detection strategies. Learn if genetic testing is right for you.",
    category: "Medical Insights",
    image: blogMedicalInsights,
    author: {
      name: "Dr. David Park",
      role: "Genetic Counselor",
      bio: "Dr. David Park is a certified genetic counselor with extensive experience in cancer genetics. He helps patients understand their genetic risks and make informed decisions about genetic testing and preventive strategies.",
    },
    readTime: 11,
    date: "February 5, 2024",
    featured: true,
    content: [
      "Genetic testing for cancer risk has become increasingly important in cancer prevention and early detection. Understanding your genetic makeup can help you and your healthcare team make informed decisions about screening and prevention strategies.",
      "Hereditary cancer syndromes account for about 5-10% of all cancers. If you have a strong family history of cancer, particularly if multiple relatives had cancer at young ages or the same type of cancer, genetic testing might be recommended.",
      "The most well-known cancer susceptibility genes are BRCA1 and BRCA2, which are associated with increased risk of breast and ovarian cancer. However, there are many other genes that can increase cancer risk, including those associated with colorectal, pancreatic, and other cancers.",
      "Genetic testing typically involves a simple blood draw or saliva sample. The sample is analyzed for mutations in genes known to increase cancer risk. Results usually take several weeks and should be discussed with a genetic counselor.",
      "If genetic testing reveals a mutation, it doesn't mean you'll definitely develop cancer. It means your risk is higher than average. This information can guide important decisions about screening frequency, preventive surgeries, and lifestyle modifications.",
      "It's crucial to meet with a genetic counselor before and after testing. They can help you understand whether testing is appropriate for you, what the results mean, and how they might affect your family members.",
      "Genetic testing isn't right for everyone, and it's a deeply personal decision. Consider the potential benefits—earlier detection, preventive options, information for family members—against concerns about privacy, emotional impact, and insurance implications. A genetic counselor can help you navigate these considerations.",
    ],
  },
];

interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
}

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Jennifer Smith",
      date: "March 16, 2024",
      content: "Thank you for sharing this inspiring story. It gives me hope as I begin my own treatment journey.",
    },
    {
      id: 2,
      author: "Michael Johnson",
      date: "March 17, 2024",
      content: "This article is so well-written and informative. I'll be sharing it with my support group.",
    },
  ]);
  const [newComment, setNewComment] = useState({ name: "", email: "", content: "" });

  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Button onClick={() => navigate("/blogs")}>Back to All Articles</Button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;

    const shareUrls: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.name && newComment.content) {
      const comment: Comment = {
        id: comments.length + 1,
        author: newComment.name,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        content: newComment.content,
      };
      setComments([...comments, comment]);
      setNewComment({ name: "", email: "", content: "" });
      toast.success("Comment posted successfully!");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 -mt-32 relative z-10 max-w-4xl">
        <div className="bg-background rounded-lg shadow-xl p-8 md:p-12">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/blogs")}
            className="mb-6 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Button>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
              <span>{post.date}</span>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Article Body */}
          <div className="prose prose-lg max-w-none mb-12">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <Separator className="mb-8" />

          {/* Share Buttons */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Share this article</h3>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare("facebook")}
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare("twitter")}
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare("linkedin")}
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleShare("email")}
                aria-label="Share via Email"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Author Bio */}
          <div className="bg-muted/50 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold mb-1">About {post.author.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{post.author.role}</p>
                <p className="text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6" />
              Comments ({comments.length})
            </h3>

            {/* Existing Comments */}
            <div className="space-y-6 mb-8">
              {comments.map((comment) => (
                <div key={comment.id} className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">{comment.author}</span>
                    <span className="text-sm text-muted-foreground">{comment.date}</span>
                  </div>
                  <p className="text-muted-foreground">{comment.content}</p>
                </div>
              ))}
            </div>

            {/* Comment Form */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Leave a Comment</h4>
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      value={newComment.name}
                      onChange={(e) =>
                        setNewComment({ ...newComment, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={newComment.email}
                      onChange={(e) =>
                        setNewComment({ ...newComment, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium mb-2">
                    Comment *
                  </label>
                  <Textarea
                    id="comment"
                    rows={4}
                    value={newComment.content}
                    onChange={(e) =>
                      setNewComment({ ...newComment, content: e.target.value })
                    }
                    required
                  />
                </div>
                <Button type="submit">Post Comment</Button>
              </form>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 mb-16">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blogs/${relatedPost.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4">
                        {relatedPost.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {relatedPost.readTime} min read
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogPost;
