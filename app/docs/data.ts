import { MenuOption, Project } from "../../types/docs";

export const MenuData: MenuOption[] = [
    { element_id: "portfolio", title: "Portfolio" },
    { element_id: "postwoman", title: "postwoman:~" },
    { element_id: "zerl", title: "Elias Realtor" },
    { element_id: "gda", title: "Genet's Designs" },
    { element_id: "dt", title: "Debre Tsion Church" },
    { element_id: "misplaced", title: "Misplaced" },
    { element_id: "tapin", title: "Let's Tap In" },
    { element_id: "sonic", title: "Sonic Game" }
];

export const ProjectsData: Project[] = [
    {
        element_id: "portfolio",
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
        element_id: "postwoman",
        header: "postwoman:~",
        paragraph: "",
        code: `// curl.go
func buildCommand(request models.Request) []string {

    shell := []string{"bash", "-c"}
    command := []string{"curl", "-L", "-v", "--http1.1"}

    if request.Method != "" && request.Method != "GET" {
        command = append(command, "-X", request.Method)
    }

    if request.Headers != "" {
        command = append(command, "-H", "'" + request.Headers + "'")
    }

    if request.Origin != "" {
        command = append(command, "-H", "'Origin: " + request.Origin + "'")
    }

    if request.Body != "" {
        command = append(command, "-d", "'" + request.Body + "'")
    }

    command = append(command, request.Url)
    shell = append(shell, strings.Join(command, " "))
    return shell 
}

func ExecuteCurlRequest(c echo.Context) error {

    var request models.Request
    var response, headers bytes.Buffer

    json.NewDecoder(c.Request().Body).Decode(&request)

    command := buildCommand(request)
    curlRequest := exec.Command(command[0], command[1:]...)

    curlRequest.Stdout = &response
    curlRequest.Stderr = &headers

    err := curlRequest.Run()

    if err != nil && err.Error() == "exit status 6" {
        println(err.Error(), "/n response: ", response.String(), "/n headers: ", headers.String())
        return c.HTML(200, "<p>$  error: " + err.Error() + ", probably an invalid url given</p>")
    }  else if err != nil && err.Error() == "exit status 7" {
        println(err.Error(), "/n response: ", response.String(), "/n headers: ", headers.String())
        return c.HTML(200, "<p>$  error: " + err.Error() + ", probably can't connect to localhost, use host.docker.internal instead of localhost in your url if running postwoman with docker</p>")
    } else if err != nil {
        println(err.Error(), "/n response: ", response.String(), "/n headers: ", headers.String())
        return c.HTML(200, "<p>$  error: " + err.Error() + ", probably an invalid header or body given</p>")
    }

    statusRegex := regexp.MustCompile("HTTP\/\d\.\d\s(\d{3})")
    statusMatch := statusRegex.FindAllStringSubmatch(headers.String(), -1)
    splicedStatus := statusMatch[len(statusMatch) - 1][1]

    request.Status = splicedStatus 
    request.Date = strconv.FormatInt(time.Now().UTC().UnixMilli(), 10)
    request.Hidden = false

    stringRequest, _ := json.Marshal(request)

    exec.Command("curl", "-X", "POST", "-d", string(stringRequest), "http://localhost:" + env["GO_PORT"] + "/api/request/new/" + request.User_email).Output()

    errorResponseRegex := regexp.MustCompile("<title>(?s).*Error.*<\/title>")

    if errorMatch := errorResponseRegex.FindStringSubmatch(response.String()); errorMatch != nil {

        preTagRegex := regexp.MustCompile("<pre>(?s).*?<\/pre>")
        preTagMatch := preTagRegex.FindStringSubmatch(response.String())

        if preTagMatch == nil {
            return c.HTML(200, "$  status: " + splicedStatus + "response: " + response.String())
        } else {
            return c.HTML(200, "$  error: " + preTagMatch[0] + "<br /><br />status: " + splicedStatus)
        }
    }

    return c.HTML(200," 
        $  status: " + splicedStatus + "
        <br /><br />
        <textarea id="response-textarea" readonly>" + response.String() + "&#013;</textarea>
    ")
}`,
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
        element_id: "zerl",
        header: "Elias Realtor",
        paragraph: "",
        code: `// AdminService.java
@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Value("S{security.jwt.secret}")
    private String secret;

    public String createJWT(Admin admin) throws Exception {

        JwtClaims jwtClaims = new JwtClaims();
        JsonWebSignature jws = new JsonWebSignature();
        Key key = new HmacKey(secret.getBytes());

        jwtClaims.setClaim("username", admin.username);
        jwtClaims.setClaim("password", admin.password);

        jws.setKey(key);
        jws.setAlgorithmHeaderValue("HS256");
        jws.setPayload(jwtClaims.toJson());

        return jws.getCompactSerialization();
    }

    public boolean authenticateAdmin(Admin admin) {

        String existingAdminPassword = adminRepository.authenticateAdmin(admin.username);

        if (existingAdminPassword == null) {
            return false;
        }

        if (BCrypt.checkpw(admin.password, existingAdminPassword)) {
            return true;
        } else {
            return false;
        }
    }

    public Admin createAdmin(Admin admin) {

        String encryptedPassword = BCrypt.hashpw(admin.password, BCrypt.gensalt());
        admin.password = encryptedPassword;

        return adminRepository.createAdmin(admin);
    }

    public Admin updatePassword(Admin admin) {

        String encryptedPassword = BCrypt.hashpw(admin.password, BCrypt.gensalt());
        admin.password = encryptedPassword;

        return adminRepository.updatePassword(admin);
    }
}`,
        github: "https://github.com/ZERL-dev",
        siteURL: "https://github.com/dawitalemu4/zerl-server",
        images: [
            "java.webp",
            "spring.webp",
            "react.webp",
            "remix.webp",
            "ts.webp"
        ]
    },
    {
        element_id: "gda",
        header: "Genet's Designs",
        paragraph: "",
        code: `// graphql/schema.py
class sale_clothes_type(DjangoObjectType):
    class Meta:
        model = sale_clothes_model
        fields = "__all__"

class sold_clothes_type(DjangoObjectType):
    class Meta:
        model = sold_clothes_model
        fields = "__all__"

class Query(graphene.ObjectType):

    saleClothes = graphene.List(sale_clothes_type, category=graphene.String(), size=graphene.String(), gender=graphene.String())

    def resolve_saleClothes(root, info, category=None, size=None, gender=None):

        if category and not size and not gender:
            return sale_clothes_model.objects.filter(category=category)
        if not category and size and not gender:
            return sale_clothes_model.objects.filter(size=size)
        if not category and not size and gender:
            return sale_clothes_model.objects.filter(gender=gender)
        if category and size and not gender:
            return sale_clothes_model.objects.filter(category=category, size=size)
        if category and not size and gender:
            return sale_clothes_model.objects.filter(category=category, gender=gender)
        if not category and size and gender:
            return sale_clothes_model.objects.filter(size=size, gender=gender)
        if category and size and gender:
            return sale_clothes_model.objects.filter(category=category, size=size, gender=gender)
        else:
            return sale_clothes_model.objects.all()


    soldClothes = graphene.List(sold_clothes_type, category=graphene.String(), size=graphene.String(), gender=graphene.String())

    def resolve_soldClothes(root, info, category=None, size=None, gender=None):

        if category and not size and not gender:
            return sold_clothes_model.objects.filter(category=category)
        if not category and size and not gender:
            return sold_clothes_model.objects.filter(size=size)
        if not category and not size and gender:
            return sold_clothes_model.objects.filter(gender=gender)
        if category and size and not gender:
            return sold_clothes_model.objects.filter(category=category, size=size)
        if category and not size and gender:
            return sold_clothes_model.objects.filter(category=category, gender=gender)
        if not category and size and gender:
            return sold_clothes_model.objects.filter(size=size, gender=gender)
        if category and size and gender:
            return sold_clothes_model.objects.filter(category=category, size=size, gender=gender)
        else:
            return sold_clothes_model.objects.all()


schema = graphene.Schema(query=Query)
`,
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
        element_id: "dt",
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
        element_id: "misplaced",
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
        element_id: "tapin",
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
        element_id: "sonic",
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