import { HeroOption, Project } from '../utils/types';

export const HeroData: HeroOption[] = [
    { element_id: "Portfolio", title: "Portfolio" },
    { element_id: "Postwoman", title: "postwoman:~" },
    { element_id: "ZERL", title: "ZERL" },
    { element_id: "GDA", title: "GDA" },
    { element_id: "Misplaced", title: "Misplaced" },
    { element_id: "TapIn", title: "Let's Tap In" },
    { element_id: "Sonic", title: "2D Sonic Platformer" }
];

export const ProjectsData: Project[] = [
    {
        divID: "Portfolio",
        header: "Portfolio",
        paragraph: "Thought the parallax effect was cool? Here's the code for the effect on the projects section!  Even though this function is almost the same as the other functions in the other sections, this one has an on and off button to toggle the effect. In short, I took the height of the div and the top, the scroll position of the user, and calculated the % of where their scroll position is on the div. I also offset the top a bit for timing reasons, as it would start counting the % immediately as the top of the div showed up on the screen, but the effect is cooler when you can see it happening😹. Why I'm using this component's parallax function is, because believe it or not, I spent 20 minutes or so confused why 'if (effectToggle === true)' wouldn't display 'On', until I tried false like how it is now. Don't ask me why it works. (jk)",
        code: `// projects.tsx
const [projectScrollHeight, setProjectScrollHeight] = useState("0%");
const [effectToggle, setEffectToggle] = useState(true);
const [effectText, setEffectText] = useState("On");
const [showModal, setshowModal] = useState(false);
const [gif, setGif] = useState("");
const projectsContainerRef = useRef<HTMLDivElement>(null);

const toggleModal = () => {
    setshowModal(!showModal);
};

const toggleEffect = () => {

    setEffectToggle(!effectToggle);

    if (effectToggle === false) {
        setEffectText("On");
    } else {
        setEffectText("Off");
    };
};

const handleProjectScroll = () => {

    const projectsContainer = projectsContainerRef.current;
    if (!projectsContainer) return;

    const containerHeight = projectsContainer.clientHeight;
    const containerTop = projectsContainer.getBoundingClientRect().top;
    const scrollPosition = Math.max(0, window.scrollY - containerTop - window.innerHeight * 1.9);

    const isContainerVisible = containerTop + containerHeight >= 0 && containerTop <= window.innerHeight;

    if (!isContainerVisible) {
        setProjectScrollHeight("0%");
    } else {
        const maxScroll = containerHeight * 2.5;
        const projectScrollPercentage = Math.min((scrollPosition / maxScroll) * 100, 100);
        setProjectScrollHeight(S{projectScrollPercentage}%);
    };
};

useEffect(() => {

    window.addEventListener("scroll", handleProjectScroll);

    return () => {
        window.removeEventListener("scroll", handleProjectScroll);
    };

}, []);

return (
    <div id="projects" ref={projectsContainerRef}>
    ...
)`,
        github: "https://github.com/dawitalemu4/portfolio",
        siteURL: "/",
        images: [
            "react.webp",
            "next.webp",
            "ts.webp"
        ]
    },
    {
        divID: "Postwoman",
        header: "postwoman:~",
        paragraph: "",
        code: "",
        github: "https://github.com/dawitalemu4/postwoman",
        siteURL: "https://postwoman.dev",
        images: [
            "go.webp",
            "echo.webp",
            "htmx.webp",
            "js.webp"
        ]
    },
    {
        divID: "ZERL",
        header: "ZERL",
        paragraph: "",
        code: "",
        github: "https://github.com/ZERL-dev",
        siteURL: "https://zbesthome4u.com",
        images: [
            "java.webp",
            "spring.webp",
            "react.webp",
            "remix.webp",
            "ts.webp"
        ]
    },
    {
        divID: "GDA",
        header: "Genet's Designs",
        paragraph: "",
        code: "",
        github: "https://github.com/GDA-dev",
        siteURL: "https://genetdesigns.com",
        images: [
            "python.webp",
            "django.webp",
            "gql.webp",
            "react.webp",
            "ts.webp"
        ]
    },
    {
        divID: "DebreTsion",
        header: "Debre Tsion Church",
        paragraph: "This component is one of my favorites because the UI that this code creates feels amazing to me.  The typescript basically fetches the images from my firebase db and has a function that makes any image clicked on become a modal. What made this challenging was figuring out how to make an image that was clicked on become the image in the modal, as the image on the modal would default to the latest image that was fetched. How I solved this was by running another for loop to pick up the specific image that was clicked on as url and made the selectedImage prop = url when the image is clicked on. I know this can be optimized, but I had other things to get to, and plan to get back to it when I learn how to optimize it.",
        code: `// GalleryBody.ts
export class GalleryBody implements OnInit {
    Gallery$: Observable<Galleries[]>;
    firestore: Firestore = inject(Firestore);

    constructor() {
        const GalleryCollection = collection(this.firestore, 'Gallery');
        const GalleryQuerySnapshot = collectionData(query(GalleryCollection, orderBy('Date', 'desc')));
        this.Gallery$ = GalleryQuerySnapshot as Observable<Galleries[]>;
    }

    ngOnInit() {}

    modalOpen: boolean = false;
    selectedImage: string = '';

    closeModal = () => {
        this.modalOpen = false;
    };

    showModal = (selectedImage: string) => {
        this.selectedImage = selectedImage;
        this.modalOpen = true;
    };
};

/* 

interface Galleries {
    Name: string;
    URL: string[];
}

html:
    <div id="Collection" *ngFor="let gallery of Gallery$ | async">
        <div id="CollectionHeaderContainer">
            <p id="CollectionHeader">{{ gallery.Name }}</p>
        </div>
        <div id="CollectionImagesContainer">
            <ng-container *ngFor="let url of gallery.URL">
                <ng-container *ngIf="modalOpen; else smallView">
                    <div id="ModalView" (click)="closeModal()">
                        <i id="ModalClose" class="fa fa-solid fa-times" (click)="closeModal()"></i>
                        <img id="ModalImage" [lazyLoad]="selectedImage" (click)="closeModal()" />
                    </div>
                </ng-container>
                <ng-template #smallView>
                    <img id="CollectionImage" [lazyLoad]="url" (click)="showModal(selectedImage = url)" />
                </ng-template>
            </ng-container>
        </div>
    </div>
*/
...`,
        github: "https://github.com/DebreTsionWeb/debretsion.org",
        siteURL: "https://debretsion.org/en",
        images: [
            "angular.webp",
            "firebase.webp",
            "gcp.webp",
            "ts.webp"
        ]
    },
    {
        divID: "Misplaced",
        header: "Misplaced",
        paragraph: "This code block creates one of my favorite features on this app, which is previewing what their post will look like while they're typing in the form's input boxes! I know it looks weird, it's React Native, but I utilized useState and updated the state of each text variable's text every time the input box's input changed. Then I used the variable that is being changed as the inner text of the tag in the preview, creating a constant update to the preview's text!",
        code: `// PostForm.jsx
const [Price, setPrice] = useState('');
const [Title, setTitle] = useState('');
const [Location, setLocation] = useState('');
const [Description, setDescription] = useState('');
const [Contact, setContact] = useState('');

    
const handlePriceChange = (text) => {
    setPrice(text);
}

const handleTitleChange = (text) => {
    setTitle(text);
}

const handleLocationChange = (text) => {
    setLocation(text);
}

const handleDescriptionChange = (text) => {
    setDescription(text);
}

const handleContactChange = (text) => {
    setContact(text);
}


jsx:
    <View style={styles.container}>
        {posts.map(post => (
            <Postcard
                price={Price}
                title={Title}
                location={Location}
                description={Description}
                contact={Contact}
            />
        ))}
    </View>
...
    <TextInput
        placeholder="Enter a title"
        onChangeText={setTitle}
        value={Title}
    />
...
`,
        github: "https://github.com/misplaced-dev/misplaced.app",
        siteURL: "https://misplaced.app",
        images: [
            "react.webp",
            "expo.webp",
            "express.webp",
            "mongo.webp",
            "js.webp"
        ]
    },
    {
        divID: "TapIn",
        header: "Let's Tap In",
        paragraph: "Okay. I know I used a package, but I didn't copy and paste this code, and the docs weren't super easy for me to understand, making it a challenge for me when I was at this point of my coding journey. This code snippet takes the main color from an image (the image of the card that was clicked) and then creates a color for a background and a color for an accent (text color, etc.) that can be used on the page of the card that was clicked. In another component not in this code snippet, I take the values of these two variables and use them as a gradient in the CSS, making whatever color the background is a cool gradient matching up with the main color of the image!",
        code: `// Background.tsx
import Color from "color-thief-react";

interface BackgroundProps {
    getBackgroundColor: (BackgroundColor: string) => void;
    getAccentColor: (AccentColor: string) => void;
}

const Background: React.FC<BackgroundProps> = ({ getBackgroundColor, getAccentColor }) => {

    const imgSrc = "https://example.image/from/db.webp";
    const hexToRGBA = (hexColor: string, alpha: number) => {
        const hex = hexColor.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const a = alpha;
        return 'rgba(S{r},S{g},S{b},S{a})';
    };

    return (
        <div>
            <Color src={imgSrc} crossOrigin="anonymous" format="hex">
                {({ data: predominantColorData }) => {
                    const color = predominantColorData || '';
                    const backgroundRGBA = hexToRGBA(color, 0.5);
                    getBackgroundColor(backgroundRGBA);
                    const accentRGBA = hexToRGBA(color, 0.95);
                    getAccentColor(accentRGBA);

                    return (
                        <div>
                            <img src={imgSrc} alt="test" style={{ width: 300 }}/>
                        </div>
                    );
                }}
            </Color>
        </div>
    );
};`,
        github: "https://github.com/dawitalemu4/TapInWebPage",
        siteURL: "https://letsalltapin.vercel.app",
        images: [
            "react.webp",
            "next.webp",
            "ts.webp"
        ]
    },
    {
        divID: "Sonic",
        header: "2D Sonic Platformer",
        paragraph: "This C# script contains logic for sonic's speed, jump force, movement state, and whether he should be able to jump depending on if he isn't colliding with the ground properly/currently. This was the most challenging script for me because I liked the fast refreshes from web development, but every time I wanted to test if the new value I inserted was good or not, I had to manually stop the game and run it again. Jokes aside, the UnityEngine has a lot of functions doing all of the heavy lifting, but getting the syntax correct was harder for me as I was newer to coding when I was working on this project.",
        code: `// PlayerMovement.cs
using UnityEngine;

public class PlayerMovement : MonoBehaviour {
    private Rigidbody2D rb;
    private BoxCollider2D coll;
    private Animator anim;
    [SerializeField] private LayerMask jumpableGround;
    private float dirX = 0f;
    private SpriteRenderer sprite;
    private float moveSpeed = 15f;
    private float jumpForce = 20f;
    private enum MovementState { idle, running, jumping, falling }
    
    private void Start() {
        rb = GetComponent<Rigidbody2D>();
        coll = GetComponent<BoxCollider2D>();
        sprite = GetComponent<SpriteRenderer>();
        anim = GetComponent<Animator>();
        rb.gravityScale = 7;
    }

    private void Update() {
        dirX = Input.GetAxisRaw("Horizontal");
        rb.velocity = new Vector2(dirX * moveSpeed, rb.velocity.y);

        if (Input.GetButtonDown("Jump") && IsGrounded()) {
            rb.velocity = new Vector2(rb.velocity.x, jumpForce);
        }
        
        UpdateAnimState();
    }

    private void UpdateAnimState() {
        MovementState state;
        
        if (dirX > 0f) {
            state = MovementState.running;
            sprite.flipX = false;
        } 
        else if (dirX < 0f) {
            state = MovementState.running;
            sprite.flipX = true;
        } else {
            state = MovementState.idle;
        }

        if (rb.velocity.y > 5f) {
            state = MovementState.jumping;
        } 
        else if (rb.velocity.y < -5f)  {
            state = MovementState.falling;
        }

        anim.SetInteger("state", (int)state);
    }

    private bool IsGrounded() {
        return Physics2D.BoxCast( coll.bounds.center, coll.bounds.size, 0f, Vector2.down, .1f, jumpableGround );
    }
}`,
        github: "https://github.com/dawitalemu4/sonic",
        siteURL: "https://github.com/dawitalemu4/sonic",
        images: [
            "c.webp",
            "unity.webp"
        ]
    },
];