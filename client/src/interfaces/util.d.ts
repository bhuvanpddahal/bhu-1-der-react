export interface OptionsProp {
    optionsRef: React.RefObject<HTMLDivElement>;
    showOptions: boolean;
    toggleShowOptions: () => void;
    handleEditClick: () => void;
    handleDeleteClick: () => void;
}

export interface ConfirmBoxProp {
    type: string;
    title: string;
    description: string;
    setShowConfirmBox: React.Dispatch<React.SetStateAction<boolean>>;
    handleDeleteConfirm: () => void;
}