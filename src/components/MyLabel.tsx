import './mylabel.css';
import { CustomColor } from '../stories/MyLabel.stories';


interface Props {
  /**
   * Display a text as label
   */
  label: string,
  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3'; 
  /**
   * Capitalize the all the characters
   */
  allCaps?: boolean; 
  /**
   * Select one of the pre-set color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
  /**
   * Set a custom color
   */ 
  fontColor?: string; 
}


export const MyLabel = ( { 
  label, 
  size = 'normal', 
  allCaps = false, 
  color = 'text-primary', 
  fontColor }:Props ) => {
  return (
    <span className={ `${size} ${ color } label` } style={ { color: fontColor }}>
      {allCaps? label.toUpperCase():label}
    </span>
  )
}
