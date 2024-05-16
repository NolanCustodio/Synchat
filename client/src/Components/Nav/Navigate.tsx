import { useNavigate } from "@solidjs/router";

export default function navigate(){
    const navigate = useNavigate();

    const gotoHome = () => {
        navigate('/Home')
    }
}

