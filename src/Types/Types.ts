import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface ICustomLink {
  text: string;
  href: string;
  fontWeight?: string;
  color?: string;
  handleClick?: (arg: any) => void;
}
export interface ILayout {
  title: string;
  children: any;
  desc?: string;
}
export interface INavbar {
  isOpen : boolean;
  toggleDrawer: (state?: boolean) => void;
}
export interface IInput {
  multi?: boolean;
  mt?: string;
  name: string;
  label: string;
  type?: string;
  required? : boolean;
}
export interface IContactBox {
  t1: string;
  t2: string;
  t3: string;
  target?: string;
  href: string;
}

export interface ICustomDrawer extends INavbar {
  isOpen: boolean;
}
export interface IToolCard {
  title: string;
  src: string;
  className?: string;
  filter?: boolean;
  index?: number;
}
export interface ToolContainer {
  className?: string;
  index?: number;
  label: string;
  data: IToolCard[];
}
export interface ISocialMedia extends IToolCard {
  svg : string,
  color: string;
  href: string;
}
export interface IDrawerItem {
  text: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  isToggleTheme?: boolean;
  id: string;
  toggleDrawer: (state?: boolean) => void;
}
export interface IProjects {
  img: string;
  title: string;
  repoUrl: string;
  description: string;
  organization?: string;
  siteUrl?: string;
  techStack?: string[];
  category?: string;
}
export interface IProjectCard extends IProjects {
  isReversed?: boolean;
  className?: string;
}
