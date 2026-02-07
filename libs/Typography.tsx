'use client';

import { ReactNode } from 'react';
import { cn } from './utils/cn';

export interface TypographyProps {
  /**
   * The HTML element to render
   * @default depends on variant
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'code' | 'blockquote';

  /**
   * Typography variant style
   * @default 'body'
   */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'display'
    | 'title'
    | 'subtitle'
    | 'body'
    | 'body-sm'
    | 'body-lg'
    | 'caption'
    | 'overline'
    | 'meta'
    | 'code'
    | 'blockquote'
    | 'lead';

  /**
   * Text color variant
   */
  color?: 'primary' | 'secondary' | 'muted' | 'accent' | 'error' | 'success' | 'warning';

  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify';

  /**
   * Whether text is selectable
   * @default true
   */
  selectable?: boolean;

  /**
   * Whether to truncate text with ellipsis
   */
  truncate?: boolean;

  /**
   * Font weight override
   */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';

  /**
   * Custom className
   */
  className?: string;

  /**
   * Content to render
   */
  children?: ReactNode;

  /**
   * Additional HTML attributes
   */
  [key: string]: string | number | boolean | ReactNode | undefined;
}

const variantStyles = {
  // Display & Hero styles
  display: "font-space text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]",

  // Heading styles
  h1: "font-space text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight",
  h2: "font-space text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight",
  h3: "font-space text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight",
  h4: "font-space text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight",
  h5: "font-space text-lg md:text-xl lg:text-2xl font-semibold",
  h6: "font-space text-base md:text-lg lg:text-xl font-semibold",

  // Title variants
  title: "font-space text-2xl md:text-3xl font-bold tracking-tight",
  subtitle: "font-space text-lg md:text-xl font-medium tracking-tight",

  // Body text
  'body-lg': "font-sans text-lg leading-relaxed",
  body: "font-sans text-base leading-relaxed",
  'body-sm': "font-sans text-sm leading-relaxed",

  // Special styles
  lead: "font-sans text-xl md:text-2xl leading-relaxed font-light",
  caption: "font-sans text-sm leading-snug",
  overline: "font-sans text-xs uppercase tracking-widest leading-tight",
  meta: "font-mono text-xs uppercase tracking-widest",
  code: "font-mono text-sm leading-relaxed",
  blockquote: "font-sans text-lg md:text-xl leading-relaxed italic border-l-4 pl-4",
};

const colorStyles = {
  primary: "text-gray-100",
  secondary: "text-gray-300",
  muted: "text-gray-400",
  accent: "text-cyan-500",
  error: "text-red-500",
  success: "text-green-500",
  warning: "text-yellow-500",
};

const alignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const weightStyles = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

// Default elements for each variant
const defaultElements = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  title: 'h2',
  subtitle: 'h3',
  body: 'p',
  'body-sm': 'p',
  'body-lg': 'p',
  lead: 'p',
  caption: 'span',
  overline: 'span',
  meta: 'span',
  code: 'code',
  blockquote: 'blockquote',
} as const;

export default function Typography({
  as,
  variant = 'body',
  color,
  align,
  selectable = true,
  truncate = false,
  weight,
  className,
  children,
  ...props
}: TypographyProps) {

  const Element = as || defaultElements[variant] || 'p';

  const classes = cn(
    variantStyles[variant],
    color && colorStyles[color],
    align && alignStyles[align],
    weight && weightStyles[weight],
    !selectable && "select-none",
    truncate && "truncate",
    className
  );

  return (
    <Element className={classes} {...props}>
      {children}
    </Element>
  );
}

// Convenience components for common use cases
type ConvenienceProps = Omit<TypographyProps, 'variant'>;

export const H1 = (props: ConvenienceProps) => <Typography variant="h1" {...props} />;
export const H2 = (props: ConvenienceProps) => <Typography variant="h2" {...props} />;
export const H3 = (props: ConvenienceProps) => <Typography variant="h3" {...props} />;
export const H4 = (props: ConvenienceProps) => <Typography variant="h4" {...props} />;
export const H5 = (props: ConvenienceProps) => <Typography variant="h5" {...props} />;
export const H6 = (props: ConvenienceProps) => <Typography variant="h6" {...props} />;
export const Text = (props: ConvenienceProps) => <Typography variant="body" {...props} />;
export const Lead = (props: ConvenienceProps) => <Typography variant="lead" {...props} />;
export const Caption = (props: ConvenienceProps) => <Typography variant="caption" {...props} />;
export const Code = (props: ConvenienceProps) => <Typography variant="code" {...props} />;
export const Blockquote = (props: ConvenienceProps) => <Typography variant="blockquote" {...props} />;
