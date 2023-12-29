export type ConfigData = {
    USER_ID: string,
    TEMPLATES_ID: string,
    SERVICES_ID: string,
}

export interface HeaderTextProps {
    subTitile: string,
    title: string,
    text: string,
}

export interface ContactInfoProps {
    caption: string,
    text: string,
    children: React.ReactNode,
    handleClick: () => void,
}

export interface ServicesData {
    name: string,
    image: string,
    text: string,
}

export interface DispatchProps {
    isShow: boolean,
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SkillsData {
    name: string,
    logo: string,
    color: string,
}

export interface ProjectsData {
    id: number,
    name: string,
    type: string,
    date: string,
    description: string,
    image: string,
    url: string,
}

export type ContactValuesData = {
    name: string,
    email: string,
    message: string,
}