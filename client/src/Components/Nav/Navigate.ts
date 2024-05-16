import { useNavigate } from "@solidjs/router";

export default function navigate(location: string){
    const navigate = useNavigate();

    navigate(`/${location}`)
}

