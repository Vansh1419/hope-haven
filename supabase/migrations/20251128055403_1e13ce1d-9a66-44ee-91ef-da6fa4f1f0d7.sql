-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  author text NOT NULL,
  image text,
  status text NOT NULL DEFAULT 'draft',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog posts are viewable by everyone"
  ON public.blog_posts FOR SELECT
  USING (status = 'published' OR has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert blog posts"
  ON public.blog_posts FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update blog posts"
  ON public.blog_posts FOR UPDATE
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete blog posts"
  ON public.blog_posts FOR DELETE
  USING (has_role(auth.uid(), 'admin'));

-- Create testimonies table
CREATE TABLE public.testimonies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  cancer_type text NOT NULL,
  story text NOT NULL,
  image text,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.testimonies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Testimonies are viewable by everyone"
  ON public.testimonies FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage testimonies"
  ON public.testimonies FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- Create team_members table
CREATE TABLE public.team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  bio text NOT NULL,
  image text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Team members are viewable by everyone"
  ON public.team_members FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage team members"
  ON public.team_members FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- Create projects table
CREATE TABLE public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  image text,
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects are viewable by everyone"
  ON public.projects FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage projects"
  ON public.projects FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- Create volunteer_applications table
CREATE TABLE public.volunteer_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  interests text NOT NULL,
  availability text NOT NULL,
  experience text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.volunteer_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit volunteer applications"
  ON public.volunteer_applications FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view all volunteer applications"
  ON public.volunteer_applications FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update volunteer applications"
  ON public.volunteer_applications FOR UPDATE
  USING (has_role(auth.uid(), 'admin'));

-- Create comments table
CREATE TABLE public.comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  blog_post_id uuid REFERENCES public.blog_posts(id) ON DELETE CASCADE NOT NULL,
  author text NOT NULL,
  content text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Approved comments are viewable by everyone"
  ON public.comments FOR SELECT
  USING (status = 'approved');

CREATE POLICY "Anyone can create comments"
  ON public.comments FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can manage all comments"
  ON public.comments FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- Create trigger for blog_posts updated_at
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();