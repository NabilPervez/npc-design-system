One-line: the NPC action — champagne-gradient primary, hairline-gold secondary, ghost for nav, link for inline gold links.

```jsx
<Button variant="primary" size="lg" href="#book">Book Nabil</Button>
<Button variant="secondary" size="lg" href="#kit">Download Kit</Button>
<Button variant="link" href="/branding">Explore Company Branding</Button>
```

- Uppercase + wide tracking is baked in for primary/secondary/ghost; `link` stays sentence case.
- Hover lifts 1px and drops primary to 88% opacity (never changes the gradient). Press settles back with a 0.985 scale.
- Use exactly one `primary` per screen region.
