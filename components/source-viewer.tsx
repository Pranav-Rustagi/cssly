import { codeToHtml } from "shiki";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CopySourceButton } from "@/components/copy-source-button";

interface SourceViewerProps {
  html: string;
  css: string;
}

async function highlight(code: string, lang: "html" | "css") {
  return codeToHtml(code, {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
  });
}

export async function SourceViewer({ html, css }: SourceViewerProps) {
  const [htmlMarkup, cssMarkup] = await Promise.all([
    highlight(html, "html"),
    highlight(css, "css"),
  ]);

  return (
    <Tabs defaultValue="html">
      <TabsList>
        <TabsTrigger value="html">HTML</TabsTrigger>
        <TabsTrigger value="css">CSS</TabsTrigger>
      </TabsList>

      <TabsContent value="html" className="flex flex-col gap-2">
        <div className="flex justify-end">
          <CopySourceButton source={html} label="HTML" />
        </div>
        <ScrollArea className="h-[28rem] rounded-lg border border-border bg-surface">
          <div
            className="p-4 text-sm [&_pre]:!bg-transparent"
            dangerouslySetInnerHTML={{ __html: htmlMarkup }}
          />
        </ScrollArea>
      </TabsContent>

      <TabsContent value="css" className="flex flex-col gap-2">
        <div className="flex justify-end">
          <CopySourceButton source={css} label="CSS" />
        </div>
        <ScrollArea className="h-[28rem] rounded-lg border border-border bg-surface">
          <div
            className="p-4 text-sm [&_pre]:!bg-transparent"
            dangerouslySetInnerHTML={{ __html: cssMarkup }}
          />
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
}
