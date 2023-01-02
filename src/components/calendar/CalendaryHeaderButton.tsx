import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classNames } from "../../utils/utils";


type ButtonProps = {
    icon: IconDefinition;
    accessTxt: string;
    clickFunction: () => void;
    prominent: boolean;
}

export function CalendarHeaderButton({ icon, accessTxt, clickFunction, prominent }: ButtonProps) {

    return (
        <button
            type="button"
            onClick={clickFunction}
            className={classNames(`flex flex-none items-center place-self-center justify-center mx-1.5 my-auto hover:bg-neutral-700 h-10 w-10 rounded-full text-neutral-400`, prominent ? 'hover:text-red-500' : 'hover:text-neutral-300')}>
            <span className="sr-only">{accessTxt}</span>
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}