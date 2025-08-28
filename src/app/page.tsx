"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Upload, Menu, ChevronLeft, ChevronRight, Sparkles, Zap, Layers, Award } from "lucide-react";

export default function Home() {
  const [selectedRatio, setSelectedRatio] = useState("1:1");
  const [outputCount, setOutputCount] = useState(1);
  const [prompt, setPrompt] = useState("");

  const aspectRatios = [
    { label: "1:1", value: "1:1" },
    { label: "3:2", value: "3:2" },
    { label: "2:3", value: "2:3" },
  ];

  const aiTools = [
    {
      title: "AI换脸",
      description: "通过AI驱动的精准技术，在您的照片中间无缝替换面部",
      image: "https://ext.same-assets.com/288214181/4238116076.webp"
    },
    {
      title: "AI背景更换器",
      description: "通过智能背景替换，改变任何照片，描述您想要的效果",
      image: "https://ext.same-assets.com/288214181/1967057727.webp"
    },
    {
      title: "AI图像编辑器",
      description: "使用AI驱动的工具编辑您的照片，通过简单的文字描述进行编辑",
      image: "https://ext.same-assets.com/288214181/1926190499.webp"
    },
    {
      title: "AI背景移除器",
      description: "使用AI精准技术实时移除图片背景，获得干净的结果",
      image: "https://ext.same-assets.com/288214181/571764477.webp"
    },
  ];

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "保持原始结构",
      description: "与其他AI工具不同，我们的技术在应用变换时保留了原图像的基本构图和结构，确保转换后的图像保持可识别性。"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "快速高效的处理",
      description: "在几秒钟内生成多个变体，让您快速探索不同的创意方向，而不需要长时间的处理时间。"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "多元的风格应用",
      description: "将您的图像转化为任何艺术风格，从油画到装饰性美学，或者更改元素如颜色，时间或有环境。"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "专业质量的结果",
      description: "创造准是用于市场营销、产品可视化、网站内容优化的高分辨率变换图像。"
    }
  ];

  const steps = [
    {
      number: 1,
      title: "上传您的图像",
      description: "从您的设备中选择一张图像作为起点。为了获得最佳效果，请使用光线良好的清晰图像，以及高清晰度的输出结果。"
    },
    {
      number: 2,
      title: "描述您的更改",
      description: "提供一段提示，描述您希望如何变换图像。具体说明您要应用的风格、颜色、修改或艺术效果。"
    },
    {
      number: 3,
      title: "调整设置",
      description: "微调变换参数，例如纵横比、输出数量和变换强度，以控制结果与原始图像的相似度。"
    },
    {
      number: 4,
      title: "生成并下载",
      description: "点击生成，观察AI如何变换您的图像。对结果满意后，选择您的最爱，并下载高质量的可用版本。"
    }
  ];

  const faqItems = [
    {
      question: "图像到图像与文本到图像生成有什么不同？",
      answer: "图像到图像AI保持原始图像的基本结构和构图，而文本到图像生成则从零开始创建全新的图像。"
    },
    {
      question: "哪些类型的图像最适合变换？",
      answer: "高质量、光线良好的图像效果最佳。人物肖像、风景、物体和艺术作品都能获得出色的变换效果。"
    },
    {
      question: "我对变换过程的控制有多大？",
      answer: "您可以通过详细的文字提示、调整变换强度以及选择特定的艺术风格来精确控制变换过程。"
    },
    {
      question: "变换过程需要多长时间？",
      answer: "大多数变换在30秒到2分钟内完成，具体取决于图像复杂度和所选的变换参数。"
    },
    {
      question: "支持哪些图像格式和尺寸？",
      answer: "我们支持JPEG、PNG和WEBP格式，最大24MB，分辨率高达4096x4096像素。"
    },
    {
      question: "我可以商业使用变换后的图像吗？",
      answer: "是的，您可以将生成的图像用于商业目的，包括营销、产品展示和内容创作。"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0c0b0c] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </div>
          <span className="text-xl font-semibold">ImgToImg.ai</span>
        </div>
        <Button variant="ghost" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          图像至图像 AI
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          利用AI轻松变形、风格化和重现任何图像
        </p>

        {/* Upload Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left side - Upload area */}
            <div>
              <h3 className="text-left text-lg font-semibold mb-4">图片上传</h3>
              <p className="text-left text-sm text-gray-400 mb-4">上传一张图像作为参考，最多5张</p>

              <div className="upload-area p-8 mb-6 min-h-[300px] flex flex-col items-center justify-center">
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                <Button className="mb-4 bg-gray-800 hover:bg-gray-700">
                  上传图片
                </Button>
                <p className="text-sm text-gray-400 text-center">
                  我们支持最大24MB和4096 x 4096像素的JPEG、PNG或WEBP格式。
                </p>
              </div>

              <div className="text-left">
                <h4 className="font-semibold mb-2">提示</h4>
                <p className="text-sm text-gray-400 mb-4">描述您想要在图像中更改的内容</p>
                <Textarea
                  placeholder="示例：将背景更改为蓝天..."
                  value={prompt}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
                  className="mb-4 bg-gray-900 border-gray-700"
                  rows={4}
                />
                <div className="text-right text-sm text-gray-400">
                  {prompt.length}/1000
                </div>
              </div>

              <div className="text-left mt-6">
                <h4 className="font-semibold mb-4">长宽比</h4>
                <p className="text-sm text-gray-400 mb-4">选择输出要使用的长宽比</p>
                <div className="flex gap-3 mb-6">
                  {aspectRatios.map((ratio) => (
                    <button
                      key={ratio.value}
                      onClick={() => setSelectedRatio(ratio.value)}
                      className={`aspect-ratio-button ${selectedRatio === ratio.value ? 'active' : ''}`}
                    >
                      {ratio.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-left">
                <h4 className="font-semibold mb-4">输出数量</h4>
                <p className="text-sm text-gray-400 mb-4">选择您想要生成的输出数量</p>
                <div className="flex gap-3 mb-6">
                  {[1, 2, 4].map((count) => (
                    <button
                      key={count}
                      onClick={() => setOutputCount(count)}
                      className={`aspect-ratio-button ${outputCount === count ? 'active' : ''}`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-white text-black hover:bg-gray-200 py-3">
                生成图像 ⚡ 2
              </Button>
            </div>

            {/* Right side - Example image */}
            <div className="relative">
              <img
                src="https://ext.same-assets.com/288214181/707985023.png"
                alt="示例图像"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/80 rounded-lg p-4 text-center">
                  <p className="text-lg font-semibold italic">Weapons changed to artillery</p>
                </div>
              </div>
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <Button variant="ghost" size="icon" className="bg-black/50 hover:bg-black/70">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
              </div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <Button variant="ghost" size="icon" className="bg-black/50 hover:bg-black/70">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">相关 AI 工具</h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            探索更多 AI 驱动的工具，提升您的创意工作流程
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTools.map((tool, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                  <p className="text-sm text-gray-400">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is Image to Image AI Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">什么是图像到图像 AI？</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-8"></div>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              图像到图像 AI 是一个强大的变换工具，让您使用先进的人工智能快速变形有图像为新鲜的变体。与
              从零开始创建的普通文本到图像生成器不同，我们的技术专门用于通过保护您最初的构图、相比现有的图像转换为翻倍，保留了原始图
              像的结构和整图。
            </p>

            <p>
              我们的系统利用最先进的神经网络，理解您的源图像和指令，智能地应用变换，同时保持关键元
              素的完整性。这提供了对最终结果的卓越控制，在变换与保留之间取得完美平衡。
            </p>

            <p>
              无论您是希望可视化概念的设计师，还是创建多个广告资产的高销贝，或者学试艺术风格
              的创意爱好者，图像到图像 AI 都能以其最强的效率提供专业质量的结果。
            </p>
          </div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">通过 4 个简单步骤变换您的图像</h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            快速直观地创建您梦寐以求的图像变体：
          </p>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center text-lg font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">步骤 {step.number}：{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">为什么选择我们的图像到图像 AI？</h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            我们的平台提供独特的优势，使图像变换变得便捷又强大：
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card text-center">
                <div className="mb-4 flex justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">立即开始变换您的图像</h2>
          <p className="text-xl text-gray-300 mb-8">
            上传您的第一张图像，体验 AI 变换的强大。无需设计技能——只需您自己的图像和想法。
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg">
            ✨ 立即变换图像
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">关于图像到图像 AI 的常见问题</h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            了解更多关于我们图像到图像 AI 的变换能力及如何获得最佳结果。
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                <AccordionTrigger className="text-left hover:text-gray-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <span className="text-lg font-semibold">Image To Image AI</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Image to Image AI Generator is a free online photo editor that offers powerful features allowing you to edit, reshape, and restyle images using text prompts.
              </p>
              <p className="text-sm text-gray-400">hi@imgtoimg.ai</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">AI图像工具</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>AI 图像转图像</li>
                <li>AI图像生成器</li>
                <li>AI 图像编辑器</li>
                <li>老照片修复</li>
                <li>AI 图像放大器</li>
                <li>AI背景移除器</li>
                <li>AI背景更换器</li>
                <li>AI换脸</li>
                <li>AI去水印工具</li>
                <li>AI 图像增强器</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">照片效果</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>吉卜力 AI 生成器</li>
                <li>AI 漫画生成器</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">公司</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>隐私政策</li>
                <li>服务条款</li>
                <li>退款政策</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-sm text-gray-400">
            © 2025 Image To Image AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
