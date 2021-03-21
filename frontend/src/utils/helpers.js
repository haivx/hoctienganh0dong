import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const useQuery = () => {
    return new URLSearchParams(window.location.search);
};

export const checkFormatEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
};

export const useDebounce = (value, delay = 700) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debouncedValue;
};

export const collectIdsAndDocs = (doc) => ({ id: doc.id, ...doc.data() });

export const checkRole = (accessRoles, roles) => {
    if (!accessRoles || accessRoles.length < 1) {
        return true;
    }

    return accessRoles.map((rA) => roles.includes(rA)).filter((b) => !b).length < 1;
};
