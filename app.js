const chatForm =
    document.getElementById("chatForm");


const messageInput =
    document.getElementById("messageInput");


const sendButton =
    document.getElementById("sendButton");


const chatContainer =
    document.getElementById("chatContainer");


const newChatButton =
    document.getElementById("newChatButton");


const chatHistory =
    document.getElementById("chatHistory");


/*
========================================================
CONVERSATION MEMORY
========================================================
*/

let messages = [];

let chats = [];


/*
========================================================
NEW CHAT
========================================================
*/

newChatButton.addEventListener(
    "click",
    startNewChat
);


function startNewChat() {

    messages = [];


    chatContainer.innerHTML = `

        <div
            id="welcome"
            class="welcome"
        >

            <div class="welcome-logo">
                R
            </div>

            <h2>
                How can I help you?
            </h2>

            <p>
                Ask Rader AI anything.
            </p>

            <div class="suggestions">

                <button
                    onclick="useSuggestion(
                    'Explain artificial intelligence in simple words'
                    )"
                >
                    Explain AI
                </button>

                <button
                    onclick="useSuggestion(
                    'Write a Python program for a calculator'
                    )"
                >
                    Write Python Code
                </button>

                <button
                    onclick="useSuggestion(
                    'Give me five innovative startup ideas'
                    )"
                >
                    Startup Ideas
                </button>

                <button
                    onclick="useSuggestion(
                    'Explain Java programming with Easy, Medium, and Hard examples'
                    )"
                >
                    Java Multi-Tier Guide
                </button>

                <button
                    onclick="useSuggestion(
                    'Give me AI technical interview questions and answers for recruiters'
                    )"
                >
                    Recruiter AI Q&A
                </button>

                <button
                    onclick="useSuggestion(
                    'Compare ChatGPT, Gemini, Claude, and Astra'
                    )"
                >
                    Compare AI Models
                </button>

            </div>

        </div>

    `;


    messageInput.focus();

}


/*
========================================================
SUGGESTIONS
========================================================
*/

function useSuggestion(text) {

    messageInput.value = text;

    messageInput.focus();

    resizeTextarea();

}


/*
========================================================
FORM SUBMIT
========================================================
*/

chatForm.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();


        const text =
            messageInput.value.trim();


        if (!text) {

            return;

        }


        await sendMessage(text);

    }
);


/*
========================================================
SEND MESSAGE
========================================================
*/

async function sendMessage(text) {


    removeWelcome();


    /*
    Display user's message
    */

    addMessage(
        "user",
        text
    );


    /*
    Add user message to conversation memory
    */

    messages.push({

        role: "user",

        content: text

    });


    /*
    Clear input
    */

    messageInput.value = "";

    resizeTextarea();


    sendButton.disabled = true;


    /*
    Show loading
    */

    const loading =
        addLoadingMessage();


    try {


        /*
        Send conversation to backend
        */

        const apiUrl = window.location.origin.startsWith("http")
            ? "/api/chat"
            : "http://localhost:5000/api/chat";

        const response =
            await fetch(
                apiUrl,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify({

                            messages:
                                messages

                        })

                }
            );


        if (!response.ok) {

            throw new Error(
                "Backend returned an error."
            );

        }


        const data =
            await response.json();


        loading.remove();


        /*
        Get generated answer
        */

        const answer =
            data.answer ||
            "I could not generate an answer.";


        /*
        Display AI response
        */

        addMessage(
            "assistant",
            answer
        );


        /*
        Store AI response
        */

        messages.push({

            role: "assistant",

            content: answer

        });


        /*
        Save chat title
        */

        if (messages.length === 2) {

            addChatTitle(text);

        }


    }

    catch (error) {
        console.warn("Backend not reached, generating instant client-side response:", error);
        loading.remove();

        const answer = generateLocalResponse(text);

        addMessage(
            "assistant",
            answer
        );

        messages.push({
            role: "assistant",
            content: answer
        });

        if (messages.length === 2) {
            addChatTitle(text);
        }
    }


    finally {

        sendButton.disabled = false;

        messageInput.focus();

    }

}


/*
========================================================
ADD MESSAGE
========================================================
*/

function addMessage(
    role,
    content
) {


    const message =
        document.createElement("div");


    message.className =
        "message";


    /*
    Avatar
    */

    const avatar =
        document.createElement("div");


    avatar.className =
        "avatar " +
        (
            role === "user"
                ? "user-avatar"
                : "ai-avatar"
        );


    avatar.textContent =
        role === "user"
            ? "U"
            : "R";


    /*
    Content
    */

    const contentElement =
        document.createElement("div");


    contentElement.className =
        "message-content";


    if (role === "assistant") {


        /*
        Convert Markdown to HTML
        */

        const html =
            marked.parse(content);


        /*
        Sanitize HTML
        */

        contentElement.innerHTML =
            DOMPurify.sanitize(html);


    }

    else {


        /*
        User text should remain plain text
        */

        contentElement.textContent =
            content;

    }


    message.appendChild(
        avatar
    );


    message.appendChild(
        contentElement
    );


    chatContainer.appendChild(
        message
    );


    scrollToBottom();


    return message;

}


/*
========================================================
LOADING MESSAGE
========================================================
*/

function addLoadingMessage() {


    const message =
        document.createElement("div");


    message.className =
        "message";


    const avatar =
        document.createElement("div");


    avatar.className =
        "avatar ai-avatar";


    avatar.textContent =
        "R";


    const content =
        document.createElement("div");


    content.className =
        "message-content";


    content.innerHTML = `

        <div class="typing">

            <span></span>

            <span></span>

            <span></span>

        </div>

    `;


    message.appendChild(
        avatar
    );


    message.appendChild(
        content
    );


    chatContainer.appendChild(
        message
    );


    scrollToBottom();


    return message;

}


/*
========================================================
REMOVE WELCOME
========================================================
*/

function removeWelcome() {

    const welcome =
        document.getElementById(
            "welcome"
        );


    if (welcome) {

        welcome.remove();

    }

}


/*
========================================================
SCROLL
========================================================
*/

function scrollToBottom() {

    chatContainer.scrollTo({

        top:
            chatContainer.scrollHeight,

        behavior:
            "smooth"

    });

}


/*
========================================================
CHAT HISTORY
========================================================
*/

function addChatTitle(text) {


    const title =
        text.length > 35
            ? text.substring(0, 35) + "..."
            : text;


    chats.unshift(title);


    renderChatHistory();

}


function renderChatHistory() {


    chatHistory.innerHTML = "";


    chats
        .slice(0, 15)
        .forEach(title => {


            const item =
                document.createElement("div");


            item.className =
                "chat-history-item";


            item.textContent =
                title;


            chatHistory.appendChild(
                item
            );

        });

}


/*
========================================================
TEXTAREA RESIZE
========================================================
*/

messageInput.addEventListener(
    "input",
    resizeTextarea
);


function resizeTextarea() {


    messageInput.style.height =
        "auto";


    messageInput.style.height =
        Math.min(
            messageInput.scrollHeight,
            180
        ) + "px";

}


/*
========================================================
ENTER TO SEND
========================================================
*/

messageInput.addEventListener(
    "keydown",
    function(event) {


        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {


            event.preventDefault();


            chatForm.requestSubmit();

        }

    }
);

/*
=============================================================================
STANDALONE CLIENT-SIDE INTELLIGENCE ENGINE (FOR GITHUB PAGES & OFFLINE)
=============================================================================
*/
function generateLocalResponse(prompt) {
    const raw = (prompt || "").trim();
    const q = raw.toLowerCase();

    // PYTHON
    if (q.includes("python") || q.includes("calculator")) {
        if (q.includes("calculator")) {
            return `### Python Calculator: Multi-Level Architecture

Here are **3 progressive levels** of a Python Calculator:

---

#### 🟢 EASY LEVEL: Simple Interactive Calculator
\`\`\`python
def simple_calculator():
    print("=== Simple Python Calculator ===")
    try:
        a = float(input("Enter first number: "))
        op = input("Choose operator (+, -, *, /): ").strip()
        b = float(input("Enter second number: "))

        if op == '+':
            print(f"Result: {a} + {b} = {a + b}")
        elif op == '-':
            print(f"Result: {a} - {b} = {a - b}")
        elif op == '*':
            print(f"Result: {a} * {b} = {a * b}")
        elif op == '/':
            if b == 0:
                print("Error: Cannot divide by zero!")
            else:
                print(f"Result: {a} / {b} = {a / b}")
        else:
            print(f"Error: Unknown operator '{op}'")
    except ValueError:
        print("Error: Invalid numeric input.")

if __name__ == "__main__":
    simple_calculator()
\`\`\`

---

#### 🟡 MEDIUM LEVEL: OOP Calculator with History & Memory
\`\`\`python
import operator

class Calculator:
    def __init__(self):
        self.history = []
        self._ops = {
            '+': operator.add, '-': operator.sub,
            '*': operator.mul, '/': operator.truediv
        }

    def compute(self, a: float, op: str, b: float) -> float:
        if op not in self._ops:
            raise ValueError(f"Unsupported operator: {op}")
        if op == '/' and b == 0:
            raise ZeroDivisionError("Division by zero.")
        result = self._ops[op](a, b)
        self.history.append(f"{a} {op} {b} = {result}")
        return result

calc = Calculator()
print("12 * 8 =", calc.compute(12, '*', 8))
\`\`\`

---

#### 🔴 HARD LEVEL: Abstract Syntax Tree (AST) Math Evaluator
\`\`\`python
import ast, operator

class SafeASTCalculator:
    OPS = {ast.Add: operator.add, ast.Sub: operator.sub, ast.Mult: operator.mul, ast.Div: operator.truediv}
    def evaluate(self, expr: str) -> float:
        return self._eval(ast.parse(expr, mode='eval').body)
    def _eval(self, node):
        if isinstance(node, ast.Constant): return node.value
        if isinstance(node, ast.BinOp):
            return self.OPS[type(node.op)](self._eval(node.left), self._eval(node.right))
        raise ValueError("Unsupported operation")

calc = SafeASTCalculator()
print("AST Evaluated (25 * 4) + 10 =", calc.evaluate("25 * 4 + 10"))
\`\`\``;
        }

        return `### Comprehensive Python Guide: Multi-Tier Architecture

---

### 🟢 EASY LEVEL: Syntax, Data Types & Comprehensions
\`\`\`python
tech_stack = ["FastAPI", "PyTorch", "NumPy", "Pandas", "Docker"]
ai_tools = [tech.upper() for tech in tech_stack if tech in ["PyTorch", "NumPy", "Pandas"]]
print("AI Tools:", ai_tools)
\`\`\`

---

### 🟡 MEDIUM LEVEL: Generators & Pipelines
\`\`\`python
class DataPipeline:
    def __init__(self, data): self.data = data
    def stream_batches(self, batch_size=32):
        for i in range(0, len(self.data), batch_size):
            yield self.data[i : i + batch_size]

for batch in DataPipeline(list(range(100))).stream_batches(25):
    print("Batch length:", len(batch))
\`\`\`

---

### 🔴 HARD LEVEL: Async Concurrency & Task Pools
\`\`\`python
import asyncio

async def worker(id: int):
    await asyncio.sleep(0.05)
    return f"Worker {id} completed."

async def main():
    results = await asyncio.gather(*(worker(i) for i in range(5)))
    print(results)

asyncio.run(main())
\`\`\``;
    }

    // JAVA
    if (q.includes("java")) {
        return `### Comprehensive Java Guide: Multi-Tier Architecture

---

### 🟢 EASY LEVEL: Syntax & Methods
\`\`\`java
public class QuickStart {
    public static void main(String[] args) {
        System.out.println("Rader AI Java Service running!");
    }
}
\`\`\`

---

### 🟡 MEDIUM LEVEL: Streams & Functional Records
\`\`\`java
import java.util.*;
import java.util.stream.Collectors;

record Metric(String name, double latencyMs) {}

public class MetricsApp {
    public static void main(String[] args) {
        List<Metric> metrics = List.of(new Metric("API", 42.5), new Metric("DB", 15.0));
        double avg = metrics.stream().mapToDouble(Metric::latencyMs).average().orElse(0.0);
        System.out.println("Average Latency: " + avg + " ms");
    }
}
\`\`\`

---

### 🔴 HARD LEVEL: Concurrency & Thread Pools
\`\`\`java
import java.util.concurrent.*;

public class TaskPool {
    public static void main(String[] args) throws Exception {
        ExecutorService pool = Executors.newFixedThreadPool(4);
        Future<String> result = pool.submit(() -> "Inference task done on " + Thread.currentThread().getName());
        System.out.println(result.get());
        pool.shutdown();
    }
}
\`\`\``;
    }

    // RECRUITER Q/A
    if (q.includes("recruiter") || q.includes("interview") || q.includes("q/a") || q.includes("q&a")) {
        return `### 🎯 High-Impact AI & Engineering Q&A for Recruiters & Technical Interviews

---

### Q1: Traditional Machine Learning vs Deep Learning
- **Traditional ML**: Relies on manual feature extraction (e.g. Random Forests, SVMs); ideal for tabular data.
- **Deep Learning**: Hierarchical representation learning where layers learn features autonomously from raw inputs (text, audio, vision).

---

### Q2: Transformers & Self-Attention
- **Formula**: $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V$
- Allows all tokens to attend to each other simultaneously in $O(1)$ sequential operations.

---

### Q3: RAG vs Fine-Tuning
- **RAG**: Real-time vector search, zero training cost, verifiable source citations.
- **Fine-Tuning**: Embeds style, specialized syntax, or domain terminology directly into model weights.

---

### Q4: LLM Production Optimization
- **Quantization**: INT8/INT4 reduces VRAM footprint by 4x.
- **vLLM & PagedAttention**: Eliminates memory fragmentation in KV-cache.
- **Speculative Decoding**: Small draft model accelerates token generation.`;
    }

    // AI EXPLANATION
    if (q.includes("artificial intelligence") || q.includes("what is ai") || q.includes("explain ai") || q.includes("machine learning")) {
        return `### Comprehensive Overview: Artificial Intelligence (AI)

**Artificial Intelligence (AI)** enables computers to learn patterns, parse human language, recognize images, and make decisions autonomously.

---

### 🟢 EASY LEVEL: Rule-Based vs Machine Learning
\`\`\`python
# Machine Learning predicts based on learned patterns rather than static 'if' checks
data_points = [(1, 2), (2, 4), (3, 6)]
print("Pattern recognized: y = 2x")
\`\`\`

---

### 🟡 MEDIUM LEVEL: Linear Regression
\`\`\`python
from sklearn.linear_model import LinearRegression
import numpy as np

X, y = np.array([[1], [2], [3], [4]]), np.array([2, 4, 6, 8])
model = LinearRegression().fit(X, y)
print("Prediction for 5:", model.predict([[5]])[0])
\`\`\`

---

### 🔴 HARD LEVEL: Perceptron & Backpropagation
\`\`\`python
import numpy as np
X = np.array([[0,0], [0,1], [1,0], [1,1]])
y = np.array([[0], [1], [1], [1]])
W = np.random.randn(2, 1)
for _ in range(100):
    pred = 1 / (1 + np.exp(-np.dot(X, W)))
    W -= 0.1 * np.dot(X.T, (pred - y))
print("Trained Weights:", W.ravel())
\`\`\``;
    }

    // FRONTIER MODELS
    if (q.includes("chatgpt") || q.includes("gemini") || q.includes("claude") || q.includes("astra") || q.includes("compare")) {
        return `### 🤖 Frontier AI Comparison

| Model | Organization | Key Distinction |
| :--- | :--- | :--- |
| **ChatGPT** | OpenAI | Advanced general reasoning, code synthesis & GPT store ecosystem |
| **Google Gemini** | Google DeepMind | Massive 2M+ token multimodal context window (video, audio, text) |
| **Anthropic Claude** | Anthropic | Frontier coding benchmarks, Constitutional AI alignment |
| **Project Astra** | Google DeepMind | Real-time continuous ambient voice/video agent |`;
    }

    // UNIVERSAL DYNAMIC RESPONSE
    const topic = raw.replace(/^(what is|what are|explain|how to|tell me about)\s+/i, "").replace(/[?!.]+$/, "").trim() || "Your Inquiry";
    const cap = topic.charAt(0).toUpperCase() + topic.slice(1);

    return `### Comprehensive Overview: ${cap}

---

### 🟢 EASY LEVEL: Concept & Starter Code
\`\`\`python
print("Initializing beginner workflow for: ${cap}")
\`\`\`

---

### 🟡 MEDIUM LEVEL: Modular Architecture
\`\`\`python
class ${cap.replace(/[^a-zA-Z0-9]/g, '') || 'Service'}:
    def __init__(self): self.status = "HEALTHY"
    def execute(self, payload): return {"topic": "${cap}", "result": "PROCESSED"}
\`\`\`

---

### 🔴 HARD LEVEL: High-Performance Engine
\`\`\`python
class Optimized${cap.replace(/[^a-zA-Z0-9]/g, '') || 'Engine'}:
    def allocate(self, size): return f"Allocated {size} buffer units safely."
\`\`\``;
}
