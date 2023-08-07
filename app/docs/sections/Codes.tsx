"use client"
import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/base16/google-dark.css';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import typescript from 'highlight.js/lib/languages/typescript';
hljs.registerLanguage('typescript', typescript);
import csharp from 'highlight.js/lib/languages/csharp';
hljs.registerLanguage('csharp', csharp);

interface CodeHighlightProps {
    code: string;
}

const CodeHighlight: React.FC<CodeHighlightProps> = ({ code }) => {
    const codeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (codeRef.current) {
            hljs.highlightElement(codeRef.current);
        }
    }, [code]);

    return (
        <pre>
            <code ref={codeRef}>
                {code}
            </code>
        </pre>
    );
};

export default CodeHighlight;



export const portfolioCode: string = 
`// Project.tsx
const [projectScrollHeight, setProjectScrollHeight] = useState('0%');
const [effectToggle, setEffectToggle] = useState(true);
const [effectText, setEffectText] = useState('On');
const projectsContainerRef = useRef<HTMLDivElement>(null);

const handleProjectScroll = () => {
    
    const projectsContainer = projectsContainerRef.current;
    if (!projectsContainer) return;
  
    const containerHeight = projectsContainer.clientHeight;
    const containerTop = projectsContainer.getBoundingClientRect().top;
    const scrollPosition = Math.max(0, window.scrollY - containerTop - window.innerHeight * 1.9);
    const isContainerVisible = containerTop + containerHeight >= 0 && containerTop <= window.innerHeight;
    
    if (!isContainerVisible) {
      setProjectScrollHeight('0%');
    } else {
      const maxScroll = containerHeight * 2.5;
      const projectScrollPercentage = Math.min((scrollPosition / maxScroll) * 100, 100);
      setProjectScrollHeight('S{projectScrollPercentage}%');
    }
}

const toggleEffect = () => {

    setEffectToggle(!effectToggle);

    if (effectToggle === false) {
        setEffectText('On');
    } else {
        setEffectText('Off');
    }

}

useEffect(() => {
    window.addEventListener('scroll', handleProjectScroll);
    return () => {
        window.removeEventListener('scroll', handleProjectScroll);
    };
}, []);

    return (
        <div id='Projects' ref={projectsContainerRef}>
        ...
    )`;



export const debreTsionCode: string = 
`// GalleryBody.tsx
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
*/`;



export const misplacedCode: string = 
`// PostForm.jsx
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
`;



export const tapInCode: string =
`// Background.tsx
import Color from "color-thief-react";

interface BackgroundProps {
    getBackgroundColor: (BackgroundColor: string) => void;
    getAccentColor: (AccentColor: string) => void;
}

const Background: React.FC<BackgroundProps> = ({ getBackgroundColor, getAccentColor }) => {

    const imgSrc = "https://example.image/from/db.png";
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
};`;



export const UACode: string =
`// Courses.jsx
const courses = [
    {
        header: "Back End Dev Course", 
        button: "Access Free Training", 
        buttonLink: "https://www.educogrouppaths.org/posts/31500319",
        image: "https://link.to/image.svg",
        description: "Dummy Text"
    },
    {
        header: "Front End Dev Course", 
        button: "Access Free Training", 
        buttonLink: "https://www.educogrouppaths.org/posts/31503037",
        image: "https://link.to/image.svg",
        description: "Dummy Text"
    },
    ...
];

return (
    <div id="CoursesListGrid">
        {courses.map((course) => (
            <div key={course.id}> 
                <div id="Course">
                    <div id="CourseHeaderContainer">
                        <p id="CourseHeader">{course.header}</p>
                    </div>
                    <div id="CourseImageContainer">
                        <img id="CourseImage" src={course.image}/>
                    </div>
                    <div id="CourseDescriptionContainer">
                        <p id="CourseDescription">{course.description}</p>
                    </div>
                    <div id="CourseButtonContainer">
                        <Link id="CoursesButton" to={course.buttonLink} target="blank">{course.button}</Link>
                    </div>
                </div>
            </div>
        ))}
    </div>
);`;



export const sonicCode: string =
`// PlayerMovement.cs
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
    private enum MovementState { idle, running, jumping, falling}
  
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
      return  Physics2D.BoxCast(coll.bounds.center, coll.bounds.size, 0f, Vector2.down, .1f, jumpableGround);
    }
}`;



export const CVCode: string =
`// ShowCreators.jsx
export default function ShowCreators() {
    const [creators, setCreators] = useState([]);
  
    useEffect(() => {
      async function fetchCreators() {
        try {
          const { data, error } = await supabase
            .from('creators')
            .select('id, name, Youtube, Twitter, Instagram, description, imageURL');
  
          if (error) {
            console.log('error', error);
          } else {
            setCreators(data);
          }
        } catch (error) {
          console.log('error', error);
        }
      }
  
      fetchCreators();
    }, []); /*<- Bad code was [id]*/`;