import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}
 
const Link = ({ page, selectedPage, setSelectedPage }: Props) => {  /* makes our nav links have lowercase and removes space  */
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; // TS will now treat this as a SelectedPage enum
  return (
    <AnchorLink
     className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} 
     transition duration-500 hover:text-primary-300
     `} /* Having no class after else operator gives us a default color of black. */
     href={`#${lowerCasePage}`}
     onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link