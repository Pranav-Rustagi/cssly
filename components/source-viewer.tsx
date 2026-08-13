import { codeToHtml } from "shiki";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CopySourceButton } from "@/components/copy-source-button";

interface SourceViewerProps {
  html: string;
  css: string;
}

/** Shiki dual-theme output writes the light theme inline (`color`) and the
 * dark theme as a `--shiki-dark` custom property per token. That's built
 * for toggling via a `.dark` ancestor class — this project themes via
 * `[data-theme="dark"]` instead, so `app/globals.css` carries the override
 * that swaps to `--shiki-dark` there. Backgrounds are stripped (see
 * `[&_pre]` below) so the panel just uses the surrounding surface colour in
 * both themes. */
async function highlight(code: string, lang: "html" | "css") {
  return codeToHtml(code, {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
  });
}

/** HTML/CSS source, tabbed and copyable. Highlighting runs here, in a server
 * component, at build time — the shiki output is static markup, so this
 * costs zero client JS beyond the small copy button. */
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
