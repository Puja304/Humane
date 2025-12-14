import { IconMap } from "./IconMap";
import { DOS, DONTS} from "../data/dosDont"
import { bree, quicksand } from "@/fonts";
import { Ban } from "lucide-react";


type Props = {
    mode: string;
}

export default function DosDontsGrid({ mode }: Props) {

    // define which items we want to display
    const items = (mode == "dos" ? DOS: DONTS);

    return (
        <div className="main-grid grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 w-full">
            {items.map((item)=> {
                const Icon = IconMap[item.icon];
                    
                return (
                    <div 
                    key={item.id} 
                    className="grid-element flex flex-col items-center group py-2 md:p-5 hover:border hover:bg-gray-600 rounded-xl">
                        <div>
                            {mode == "donts" && <Ban color="#9c2828" className="size-30 bg-gray-400 rounded-full p-8">
                                <Icon className="bg-gray-400 rounded-full"/>
                            </Ban>}

                            {mode == "dos" && <Icon className="bg-gray-400 rounded-full p-4 size-20 md:p-8 md:size-30"/>}
                        </div>
                        
                        <h1 className={`${bree.className} text-white mt-1 text-center`}>{item.title}</h1>
                        <div className={` ${quicksand.className} hidden group-hover:block text-blue-300 md:w-50 text-center mt-2`}>{item.description}</div>
                    </div>
                );
            })};
        </div>
    );
};