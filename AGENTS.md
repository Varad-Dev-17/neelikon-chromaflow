<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Keep website content in browser-safe data modules and use TanStack leaf routes for distinct pages, so all navigation resolves within the redesign.
- Centralize the visual theme in src/styles.css and use the shared Button variants for interactive controls, so the identity remains consistent.
- Initialize Lenis and GSAP only in client effects, and honor reduced-motion preferences across all animation libraries, so SSR and accessibility remain safe.
