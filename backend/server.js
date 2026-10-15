const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend assets
const frontendPath = path.join(__dirname, "..", "frontend");
app.use(express.static(frontendPath));

// Root route
app.get("/", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

/*
=============================================================================
RADER AI ZERO-API-KEY INTELLIGENCE ENGINE
Every topic provides:
1. 📖 Concept & Why It Matters
2. ⚙️ How It Works (Architecture & Theory)
3. 💻 Practical Implementation (Executable Code)
=============================================================================
*/

function generateRaderResponse(prompt, history = []) {
    const raw = (prompt || "").trim();
    const q = raw.toLowerCase();

    if (!raw) {
        return "Hello! I am Rader AI. Ask me about any topic in programming, AI, machine learning, system design, or interviews — I will provide both the core concept and practical implementation.";
    }

    // -------------------------------------------------------------------------
    // 1. PYTHON
    // -------------------------------------------------------------------------
    if (q.includes("python") || q.includes("calculator")) {
        return `## Python Programming: Concepts & Practical Mastery

### 📖 Concept
**Python** is a high-level, interpreted programming language designed for readability and developer productivity. Created by Guido van Rossum in 1991, Python emphasizes clean syntax using whitespace indentation. It is the global standard for Artificial Intelligence, Machine Learning, Data Science, and Backend Web Development.

### 🔑 Why It Matters
- **AI & ML Ecosystem**: Frameworks like PyTorch, TensorFlow, Hugging Face, and scikit-learn are Python-first.
- **Developer Velocity**: Write fewer lines of code to achieve production results compared to C++ or Java.
- **Vast Standard Library**: Built-in support for concurrency, networking, serialization, and math.

### ⚙️ How It Works
Python code is compiled into bytecode (\`.pyc\`), which is then executed by the CPython Virtual Machine. Memory management is automated via reference counting and a generational cyclic garbage collector.

---

### 💻 Practical Implementation

**1. Data Processing with List & Dict Comprehensions:**
\`\`\`python
# Processing user telemetry data
metrics = [
    {"user": "alice", "latency_ms": 45, "status": 200},
    {"user": "bob", "latency_ms": 120, "status": 500},
    {"user": "charlie", "latency_ms": 32, "status": 200},
    {"user": "diana", "latency_ms": 85, "status": 200},
]

# Extract healthy requests and calculate average latency
healthy_latencies = [m["latency_ms"] for m in metrics if m["status"] == 200]
avg_latency = sum(healthy_latencies) / len(healthy_latencies)

print("Healthy Latencies:", healthy_latencies)
print(f"Average Healthy Latency: {avg_latency:.2f} ms")
\`\`\`

**2. Production OOP: Extensible Math / Expression Evaluator:**
\`\`\`python
import operator
from typing import Callable, Dict

class RobustCalculator:
    """Production-ready math engine with history and custom operators."""
    
    def __init__(self):
        self._history: list[str] = []
        self._ops: Dict[str, Callable[[float, float], float]] = {
            '+': operator.add,
            '-': operator.sub,
            '*': operator.mul,
            '/': operator.truediv,
            '**': operator.pow,
            '%': operator.mod,
        }

    def register_op(self, symbol: str, fn: Callable[[float, float], float]):
        self._ops[symbol] = fn

    def calculate(self, a: float, op: str, b: float) -> float:
        if op not in self._ops:
            raise ValueError(f"Unsupported operator '{op}'. Supported: {list(self._ops.keys())}")
        if op in ('/', '%') and b == 0:
            raise ZeroDivisionError("Cannot divide by zero.")
        
        result = self._ops[op](a, b)
        self._history.append(f"{a} {op} {b} = {result}")
        return result

    @property
    def history(self) -> list[str]:
        return list(self._history)

# Usage
calc = RobustCalculator()
print("Result 1:", calc.calculate(15, '*', 4))    # 60
print("Result 2:", calc.calculate(2, '**', 8))    # 256
print("Audit Log:", calc.history)
\`\`\`

**3. Asynchronous Concurrency with asyncio:**
\`\`\`python
import asyncio

async def fetch_service_health(service_name: str, delay: float) -> dict:
    await asyncio.sleep(delay)
    return {"service": service_name, "status": "UP", "response_time_s": delay}

async def main():
    # Execute 3 network checks concurrently
    tasks = [
        fetch_service_health("auth-api", 0.15),
        fetch_service_health("vector-db", 0.25),
        fetch_service_health("llm-gateway", 0.10),
    ]
    results = await asyncio.gather(*tasks)
    for res in results:
        print(f"[{res['service']}] -> {res['status']} in {res['response_time_s']}s")

asyncio.run(main())
\`\`\``;
    }

    // -------------------------------------------------------------------------
    // 2. JAVA
    // -------------------------------------------------------------------------
    if (q.includes("java")) {
        return `## Java Programming: Concepts & Practical Mastery

### 📖 Concept
**Java** is a strongly-typed, class-based, object-oriented language engineered under the principle: *"Write Once, Run Anywhere"* (WORA). Developed by Sun Microsystems in 1995 and maintained by Oracle, Java powers global enterprise applications, financial networks, Android apps, and big data systems.

### 🔑 Why It Matters
- **Enterprise Scale**: High-performance transaction processing for banking and telecom.
- **Type Safety & Reliability**: Compile-time validation eliminates entire classes of runtime errors.
- **Ecosystem**: Apache Kafka, Apache Spark, Spring Boot, and Elasticsearch are JVM natives.

### ⚙️ How It Works
Java source code (\`.java\`) compiles into platform-independent bytecode (\`.class\`). The Java Virtual Machine (JVM) interprets bytecode and uses the Just-In-Time (JIT) compiler to turn hot loops directly into machine code for bare-metal speed.

---

### 💻 Practical Implementation

**1. Modern Java (Java 17/21) Records and Streams API:**
\`\`\`java
import java.util.*;
import java.util.stream.Collectors;

// Immutable Data Carrier
record Microservice(String name, String tier, double p99LatencyMs, boolean active) {}

public class ServiceAnalyzer {
    public static void main(String[] args) {
        List<Microservice> registry = List.of(
            new Microservice("auth-service", "gateway", 12.5, true),
            new Microservice("payment-api", "core", 45.2, true),
            new Microservice("analytics-worker", "batch", 120.0, false),
            new Microservice("notification-svc", "gateway", 18.0, true)
        );

        // Group by tier and compute average latency for active services
        Map<String, Double> avgByTier = registry.stream()
            .filter(Microservice::active)
            .collect(Collectors.groupingBy(
                Microservice::tier,
                Collectors.averagingDouble(Microservice::p99LatencyMs)
            ));

        avgByTier.forEach((tier, avg) ->
            System.out.printf("Tier [%s] Average Latency: %.2f ms%n", tier, avg)
        );
    }
}
\`\`\`

**2. Thread-Safe Concurrency with ExecutorService:**
\`\`\`java
import java.util.concurrent.*;

public class ConcurrentWorkerPool {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(3);

        Callable<String> workerTask = () -> {
            String threadName = Thread.currentThread().getName();
            Thread.sleep(100);
            return "Task completed successfully on: " + threadName;
        };

        Future<String> future = executor.submit(workerTask);
        System.out.println("Main thread waiting for result...");
        System.out.println("Worker output: " + future.get());

        executor.shutdown();
    }
}
\`\`\``;
    }

    // -------------------------------------------------------------------------
    // 3. ARTIFICIAL INTELLIGENCE
    // -------------------------------------------------------------------------
    if (q.includes("artificial intelligence") || q.includes("what is ai") || q.includes("explain ai") || q === "ai") {
        return `## Artificial Intelligence: Concepts & Practical Implementation

### 📖 Concept
**Artificial Intelligence (AI)** is the scientific and engineering discipline of creating software systems capable of performing tasks that historically required human cognitive ability. These tasks include natural language understanding, visual perception, pattern synthesis, and autonomous decision-making.

### 🔑 Why It Matters
- **Cognitive Automation**: Resolving unstructured problems that cannot be solved by fixed if/else heuristics.
- **Pattern Recognition**: Uncovering non-linear relationships across millions of variables in high-dimensional space.
- **Generative Capability**: Creating human-grade text, software code, images, and audio on demand.

### ⚙️ How It Works
AI operates across a hierarchy:
1. **Rule-Based Systems**: Deterministic decision trees and expert systems.
2. **Machine Learning (ML)**: Statistical models learning representations from empirical data.
3. **Deep Learning (DL)**: Hierarchical neural networks learning multi-layer representations.
4. **Generative AI / Foundation Models**: Billions of parameters pre-trained on internet-scale corpora.

---

### 💻 Practical Implementation

**1. Rule-Based AI vs Machine Learning Paradigm:**
\`\`\`python
# Rule-Based: Programmer hardcodes decisions
def rule_based_sentiment(text: str) -> str:
    positive_words = {"great", "fast", "reliable", "smart", "love"}
    words = text.lower().split()
    return "POSITIVE" if any(w in positive_words for w in words) else "NEUTRAL"

print("Rule AI Result:", rule_based_sentiment("Rader AI is fast and smart"))
\`\`\`

**2. Machine Learning: Decision Tree Classifier from Scratch Concept:**
\`\`\`python
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# Features: [temperature_celsius, humidity_percent]
# Label: 1 = Rain Likely, 0 = Clear Skies
X_train = np.array([
    [32, 40],
    [28, 85],
    [18, 90],
    [35, 30],
    [22, 75]
])
y_train = np.array([0, 1, 1, 0, 1])

clf = DecisionTreeClassifier(max_depth=3)
clf.fit(X_train, y_train)

# Predict for temperature 26°C and 82% humidity
test_reading = np.array([[26, 82]])
prediction = clf.predict(test_reading)[0]
print(f"Weather Forecast: {'Rain Expected 🌧️' if prediction == 1 else 'Clear Skies ☀️'}")
\`\`\`

**3. Single-Neuron Perceptron Learning Logical OR:**
\`\`\`python
import numpy as np

# Training dataset for OR logic gate
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([[0], [1], [1], [1]])

weights = np.random.randn(2, 1) * 0.1
bias = 0.0
learning_rate = 0.5

# Sigmoid activation: 1 / (1 + e^-z)
sigmoid = lambda z: 1.0 / (1.0 + np.exp(-z))

# Gradient descent optimization loop
for epoch in range(500):
    z = np.dot(X, weights) + bias
    y_pred = sigmoid(z)
    
    # Compute error gradient
    error = y_pred - y
    d_weights = np.dot(X.T, error * y_pred * (1 - y_pred))
    d_bias = np.sum(error * y_pred * (1 - y_pred))
    
    weights -= learning_rate * d_weights
    bias -= learning_rate * d_bias

final_preds = (sigmoid(np.dot(X, weights) + bias) > 0.5).astype(int)
print("Trained OR Gate Output:")
for inp, pred in zip(X, final_preds):
    print(f"Input: {inp.tolist()} -> Output: {pred[0]}")
\`\`\``;
    }

    // -------------------------------------------------------------------------
    // 4. MACHINE LEARNING
    // -------------------------------------------------------------------------
    if (q.includes("machine learning") || q.includes("supervised") || q.includes("unsupervised") || q.includes("regression") || q.includes("classification")) {
        return `## Machine Learning: Concepts & Practical Implementation

### 📖 Concept
**Machine Learning (ML)** is the branch of Artificial Intelligence where algorithms identify patterns in empirical data to make predictions or decisions without being explicitly programmed with static rules.

### 🔑 Why It Matters
- **Generalization**: ML models generalize from past observations to accurately score unseen inputs.
- **Three Core Paradigms**:
  1. **Supervised Learning**: Mapping inputs $X$ to labeled ground-truth $Y$ (Regression, Classification).
  2. **Unsupervised Learning**: Discovering latent structures and clusters without ground-truth labels.
  3. **Reinforcement Learning**: Agents optimizing policy actions to maximize cumulative reward signals.

### ⚙️ How It Works
The standard ML lifecycle:
1. **Feature Engineering**: Transforming raw data into normalized numerical vectors.
2. **Loss Function Definition**: Quantifying prediction divergence (MSE for regression, Cross-Entropy for classification).
3. **Optimization**: Adjusting parameters using algorithms like Stochastic Gradient Descent (SGD) or Adam.
4. **Validation**: Evaluating on isolated test partitions to verify against overfitting.

---

### 💻 Practical Implementation

**1. Supervised Classification with Random Forest:**
\`\`\`python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Load benchmark dataset
data = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    data.data, data.target, test_size=0.25, random_state=42
)

# Initialize and train ensemble model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate predictions
y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred) * 100:.2f}%")
print("Target classes:", data.target_names)
\`\`\`

**2. Supervised Linear Regression:**
\`\`\`python
import numpy as np
from sklearn.linear_model import LinearRegression

# Training data: Experience (Years) vs Annual Salary (Thousands USD)
X = np.array([[1], [2], [3], [5], [7], [10]])
y = np.array([48.0, 55.0, 64.0, 82.0, 105.0, 140.0])

regressor = LinearRegression()
regressor.fit(X, y)

# Predict for 4 and 8 years of experience
test_years = np.array([[4], [8]])
predictions = regressor.predict(test_years)

print(f"Model Formula: Salary = {regressor.coef_[0]:.2f} * Years + {regressor.intercept_:.2f}")
for yr, pred in zip(test_years.flatten(), predictions):
    print(f"Experience: {yr} yrs -> Estimated Compensation: \${pred:.1f}k")
\`\`\`

**3. Unsupervised Clustering with K-Means:**
\`\`\`python
from sklearn.cluster import KMeans
import numpy as np

# Customer telemetry: [Annual Spend USD, Purchase Frequency per Month]
customers = np.array([
    [500, 2], [450, 1], [600, 3],      # Low engagement
    [2500, 8], [3000, 9], [2800, 7],   # VIP customers
    [1200, 4], [1400, 5], [1100, 4],   # Regular customers
])

kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
labels = kmeans.fit_predict(customers)

segments = {0: "Cluster A", 1: "Cluster B", 2: "Cluster C"}
for i, (spend, freq) in enumerate(customers):
    print(f"Customer {i+1} (\${spend}, {freq} purchases/mo) -> Assigned to: Segment {labels[i]}")
\`\`\``;
    }

    // -------------------------------------------------------------------------
    // 5. DEEP LEARNING & NEURAL NETWORKS
    // -------------------------------------------------------------------------
    if (q.includes("deep learning") || q.includes("neural network") || q.includes("pytorch") || q.includes("backprop")) {
        return `## Deep Learning: Concepts & Practical Implementation

### 📖 Concept
**Deep Learning (DL)** is a specialized subfield of machine learning based on Artificial Neural Networks with multiple hidden layers (*depth*). Unlike traditional ML, which requires human domain experts to craft manual features, deep neural networks perform **hierarchical feature learning**: early layers extract primitive features (edges, frequencies), while deeper layers compose them into semantic abstractions (faces, phonemes, syntax).

### 🔑 Why It Matters
- **Dominates Unstructured Data**: State-of-the-art across vision, audio, natural language, and code.
- **Universal Function Approximator**: Proven mathematically capable of approximating any continuous non-linear function.
- **End-to-End Learning**: Directly maps raw sensors or tokens to final outputs without intermediate pipelines.

### ⚙️ How It Works
- **Forward Pass**: Tensors pass through linear transformations followed by non-linear activations ($z = Wx + b$, $a = f(z)$).
- **Loss Computation**: Quantifies deviation between output probabilities and actual target labels.
- **Backpropagation**: Applies the calculus chain rule backward from the loss layer to calculate the partial derivative $\\frac{\\partial L}{\\partial W}$ for every parameter.
- **Weight Update**: Parameters are updated along the negative gradient vector: $W \\leftarrow W - \\eta \\nabla L$.

---

### 💻 Practical Implementation

**1. Multi-Layer Perceptron (PyTorch Production Pattern):**
\`\`\`python
import torch
import torch.nn as nn
import torch.optim as optim

class DeepClassifier(nn.Module):
    def __init__(self, input_dim: int, hidden_dim: int, num_classes: int):
        super().__init__()
        self.network = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.BatchNorm1d(hidden_dim),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(hidden_dim, hidden_dim // 2),
            nn.ReLU(),
            nn.Linear(hidden_dim // 2, num_classes)
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.network(x)

# Synthetic batch: 64 samples, 32 input features, 4 target classes
torch.manual_seed(42)
X_batch = torch.randn(64, 32)
y_batch = torch.randint(0, 4, (64,))

model = DeepClassifier(input_dim=32, hidden_dim=64, num_classes=4)
criterion = nn.CrossEntropyLoss()
optimizer = optim.AdamW(model.parameters(), lr=1e-3, weight_decay=1e-4)

# Single training step demonstration
optimizer.zero_grad()
logits = model(X_batch)
loss = criterion(logits, y_batch)
loss.backward()
optimizer.step()

print(f"Training Step Complete. Batch Loss: {loss.item():.4f}")
print("Logits shape:", logits.shape)
\`\`\`

**2. Neural Network Forward & Backpropagation from Scratch (NumPy):**
\`\`\`python
import numpy as np

# 2-layer Neural Network
np.random.seed(42)
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([[0], [1], [1], [0]])  # Non-linear XOR problem

W1 = np.random.randn(2, 4) * 0.5
b1 = np.zeros((1, 4))
W2 = np.random.randn(4, 1) * 0.5
b2 = np.zeros((1, 1))

sigmoid = lambda x: 1 / (1 + np.exp(-x))
d_sigmoid = lambda s: s * (1 - s)

for epoch in range(2000):
    # Forward Pass
    h = sigmoid(np.dot(X, W1) + b1)
    out = sigmoid(np.dot(h, W2) + b2)

    # Loss and Backpropagation
    error = out - y
    d_out = error * d_sigmoid(out)
    d_h = np.dot(d_out, W2.T) * d_sigmoid(h)

    # Gradient updates
    W2 -= 0.5 * np.dot(h.T, d_out)
    b2 -= 0.5 * np.sum(d_out, axis=0, keepdims=True)
    W1 -= 0.5 * np.dot(X.T, d_h)
    b1 -= 0.5 * np.sum(d_h, axis=0, keepdims=True)

print("XOR Predictions after 2000 epochs (target: [0, 1, 1, 0]):")
print(np.round(out.flatten(), 3))
\`\`\``;
    }

    // -------------------------------------------------------------------------
    // 6. TRANSFORMERS & LLMs
    // -------------------------------------------------------------------------
    if (q.includes("transformer") || q.includes("attention") || q.includes("llm") || q.includes("large language model")) {
        return `## Transformers & Large Language Models: Concepts & Practical Implementation

### 📖 Concept
The **Transformer** is the foundational neural architecture introduced by Vaswani et al. in Google's landmark 2017 paper *"Attention Is All You Need"*. Transformers eliminated recurrent connections (RNNs/LSTMs), allowing all tokens in a sequence to be processed in parallel. It is the core architecture powering ChatGPT, Gemini, Claude, Llama, and Mistral.

### 🔑 Why It Matters
- **Massive Parallelization**: Can be trained simultaneously across thousands of GPUs, unlocking scale.
- **Dynamic Contextual Weighting**: Instead of compressing past tokens into a fixed hidden state vector, self-attention computes direct pairwise relations between all tokens.
- **Foundation for Multi-Modal Models**: Standard architecture for text, vision (ViT), audio (Whisper), and biology (AlphaFold).

### ⚙️ How It Works
The foundational equation of modern AI is the **Scaled Dot-Product Attention**:
$$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right) V$$

- **Query ($Q$)**: The token asking: *"What information am I searching for?"*
- **Key ($K$)**: The tokens responding: *"What information do I contain?"*
- **Value ($V$)**: The actual semantic information payload to be aggregated.
- **$\\sqrt{d_k}$**: Scaling factor to prevent large dot-product magnitudes from pushing softmax into regions with vanishing gradients.

---

### 💻 Practical Implementation

**1. Scaled Dot-Product Self-Attention from Scratch (Pure NumPy):**
\`\`\`python
import numpy as np

def scaled_dot_product_attention(Q, K, V):
    """
    Computes Attention(Q, K, V) = softmax(Q @ K.T / sqrt(d_k)) @ V
    """
    d_k = Q.shape[-1]
    
    # 1. Compute raw affinity scores
    scores = np.matmul(Q, K.T) / np.sqrt(d_k)
    
    # 2. Softmax along the last axis to obtain probabilities
    exp_scores = np.exp(scores - np.max(scores, axis=-1, keepdims=True))
    attention_weights = exp_scores / np.sum(exp_scores, axis=-1, keepdims=True)
    
    # 3. Weighted aggregation of values
    output = np.matmul(attention_weights, V)
    return output, attention_weights

# Simulated sequence of 3 tokens, embedding dimension = 4
tokens = np.array([
    [1.0, 0.0, 1.0, 0.0],  # Token "The"
    [0.0, 1.0, 0.5, 0.5],  # Token "robot"
    [1.0, 1.0, 0.0, 1.0]   # Token "learns"
])

out, weights = scaled_dot_product_attention(tokens, tokens, tokens)
print("Attention Probability Matrix (Tokens x Tokens):")
print(np.round(weights, 3))
print("\\nContextualized Output Representation:")
print(np.round(out, 3))
\`\`\`

**2. Multi-Head Attention Module in PyTorch:**
\`\`\`python
import torch
import torch.nn as nn

class MultiHeadAttentionBlock(nn.Module):
    def __init__(self, d_model: int = 64, n_heads: int = 4):
        super().__init__()
        self.d_model = d_model
        self.n_heads = n_heads
        self.head_dim = d_model // n_heads
        
        self.q_proj = nn.Linear(d_model, d_model)
        self.k_proj = nn.Linear(d_model, d_model)
        self.v_proj = nn.Linear(d_model, d_model)
        self.out_proj = nn.Linear(d_model, d_model)
        
    def forward(self, x: torch.Tensor) -> torch.Tensor:
        batch_size, seq_len, _ = x.shape
        
        # Project and reshape into heads: (batch, heads, seq, head_dim)
        Q = self.q_proj(x).view(batch_size, seq_len, self.n_heads, self.head_dim).transpose(1, 2)
        K = self.k_proj(x).view(batch_size, seq_len, self.n_heads, self.head_dim).transpose(1, 2)
        V = self.v_proj(x).view(batch_size, seq_len, self.n_heads, self.head_dim).transpose(1, 2)
        
        # Scaled dot-product
        scores = torch.matmul(Q, K.transpose(-2, -1)) / (self.head_dim ** 0.5)
        attn = torch.softmax(scores, dim=-1)
        
        context = torch.matmul(attn, V)
        context = context.transpose(1, 2).contiguous().view(batch_size, seq_len, self.d_model)
        return self.out_proj(context)

mha = MultiHeadAttentionBlock(d_model=32, n_heads=4)
sample_input = torch.randn(2, 8, 32)  # 2 sentences, 8 tokens each, dim=32
output = mha(sample_input)
print(f"MHA Output shape: {output.shape} (Matches input shape for residual connections)")
\`\`\``;
    }

    // -------------------------------------------------------------------------
    // 7. RAG (RETRIEVAL-AUGMENTED GENERATION) & VECTOR SEARCH
    // -------------------------------------------------------------------------
    if (q.includes("rag") || q.includes("retrieval") || q.includes("vector") || q.includes("embedding")) {
        return `## RAG (Retrieval-Augmented Generation): Concepts & Practical Implementation

### 📖 Concept
**Retrieval-Augmented Generation (RAG)** is an enterprise architecture that enhances LLM generation by retrieving authoritative knowledge from an external database before synthesizing a response. RAG solves the fundamental limitations of foundation LLMs: hallucination, training knowledge cutoff dates, and lack of private organizational context.

### 🔑 Why It Matters
- **Eliminates Hallucination**: Grounds LLM output in verifiable retrieved source text.
- **Zero Retraining Cost**: Update knowledge in real time by simply adding documents to a vector store.
- **Access Control**: Filter retrieved context based on user roles and document permissions.

### ⚙️ How It Works
1. **Document Ingestion**: Documents are chunked into 300-800 token passages.
2. **Dense Vector Embedding**: Text passages are passed through an embedding model ($d=768$ or $1536$) to generate semantic coordinate vectors.
3. **Similarity Search**: When a user queries, the query vector is compared against indexed vectors using Cosine Similarity or Approximate Nearest Neighbors (HNSW).
4. **Context Injection**: Top-$K$ relevant passages are formatted into the LLM system prompt for grounded synthesis.

---

### 💻 Practical Implementation

**1. Complete In-Memory RAG Engine with Cosine Similarity:**
\`\`\`python
import numpy as np

class InMemoryVectorStore:
    def __init__(self):
        self.documents = []
        self.vectors = []

    def _pseudo_embed(self, text: str, dim: int = 16) -> np.ndarray:
        """Deterministic hash-based embedding simulation for illustration."""
        np.random.seed(abs(hash(text)) % (2**31))
        vec = np.random.randn(dim)
        return vec / np.linalg.norm(vec)

    def add_document(self, doc_id: str, content: str):
        vec = self._pseudo_embed(content)
        self.documents.append({"id": doc_id, "content": content})
        self.vectors.append(vec)

    def search(self, query: str, top_k: int = 2) -> list[dict]:
        q_vec = self._pseudo_embed(query)
        matrix = np.array(self.vectors)
        
        # Cosine similarity: dot product between unit vectors
        scores = np.dot(matrix, q_vec)
        top_indices = np.argsort(scores)[::-1][:top_k]
        
        return [
            {"doc": self.documents[idx], "similarity": float(scores[idx])}
            for idx in top_indices
        ]

# Build knowledge base
kb = InMemoryVectorStore()
kb.add_document("doc-1", "Rader AI runs 100% locally with zero external API key requirements.")
kb.add_document("doc-2", "PostgreSQL pgvector extension enables efficient vector similarity indexing.")
kb.add_document("doc-3", "Transformers compute attention using Query, Key, and Value projections.")

# Query search
results = kb.search("How does Rader AI run without API keys?")
print("Top Retrieved Document:")
print(f"ID: {results[0]['doc']['id']}")
print(f"Content: {results[0]['doc']['content']}")
print(f"Similarity Score: {results[0]['similarity']:.4f}")
\`\`\`

**2. RAG Prompt Assembly Pattern:**
\`\`\`python
def build_rag_prompt(user_query: str, retrieved_passages: list[str]) -> str:
    context_block = "\\n".join(f"- {p}" for p in retrieved_passages)
    return f"""You are an enterprise AI assistant. Answer using ONLY the provided context.
If the context does not contain the answer, reply that the information is unavailable.

Context:
{context_block}

User Question:
{user_query}

Grounded Answer:"""

passages = [
    "Company policy grants 20 days paid annual leave for engineering staff.",
    "Health benefits activate on day 30 of full-time employment."
]
print(build_rag_prompt("How many vacation days do engineers receive?", passages))
\`\`\``;
    }

    // -------------------------------------------------------------------------
    // 8. AI AGENTS & TOOL CALLING
    // -------------------------------------------------------------------------
    if (q.includes("agent") || q.includes("agents") || q.includes("react") || q.includes("tool calling") || q.includes("swarm")) {
        return `## AI Agents & Tool Calling: Concepts & Practical Implementation

### 📖 Concept
An **AI Agent** is an autonomous system that combines a Large Language Model with **planning**, **memory**, and **external tool execution**. While standard chatbots are passive text-in/text-out systems, an agent actively observes an environment, devises a multi-step execution plan, calls APIs or executes code, evaluates results, and self-corrects until a high-level goal is achieved.

### 🔑 Why It Matters
- **Action Execution**: Goes beyond answering questions to taking real-world actions (sending emails, modifying databases, debugging code).
- **Self-Healing Workflows**: If a tool returns an error code, the agent analyzes the stack trace and re-attempts with corrected parameters.
- **Decomposition**: Solves multi-faceted problems by delegating sub-tasks across specialized sub-agents.

### ⚙️ How It Works
The standard framework is **ReAct (Reasoning + Acting)**:
1. **Thought**: The LLM reasons about the current state: *"What is my objective and what step is next?"*
2. **Action**: The LLM outputs a structured tool invocation (e.g., \`{"tool": "calculator", "args": {"expr": "45 * 12"}}\`).
3. **Observation**: The execution runtime executes the tool and feeds the raw return value back into the LLM context.
4. **Conclusion**: The loop terminates when the model outputs a final synthesis.

---

### 💻 Practical Implementation

**1. Complete Autonomous ReAct Agent Loop:**
\`\`\`python
import json

# Available system tools
def calculator(expr: str) -> str:
    allowed = set("0123456789+-*/(). ")
    if not all(c in allowed for c in expr):
        return "Error: Invalid characters"
    return str(eval(expr))

def search_database(query: str) -> str:
    mock_db = {
        "revenue": "Q3 2026 Revenue: \$4.2M",
        "employees": "Total headcount: 48 engineers"
    }
    for k, v in mock_db.items():
        if k in query.lower():
            return v
    return "No matching records found."

TOOLS = {
    "calc": calculator,
    "search": search_database
}

class AutonomousAgent:
    def __init__(self, tools: dict):
        self.tools = tools

    def step(self, user_goal: str) -> str:
        print(f"🎯 Objective: {user_goal}")
        
        # 1. Thought step
        print("🤔 Thought: I need to check the company headcount and compute average per team.")
        
        # 2. Action step
        tool_name = "search"
        tool_input = "employees"
        print(f"🛠️ Action: Invoking '{tool_name}' with argument '{tool_input}'")
        
        # 3. Observation step
        observation = self.tools[tool_name](tool_input)
        print(f"👁️ Observation: {observation}")
        
        # 4. Next Action step: compute 48 / 4 teams
        print("🤔 Thought: Headcount is 48. There are 4 teams. Calculating headcount per team...")
        math_result = self.tools["calc"]("48 / 4")
        print(f"👁️ Observation from calc: {math_result}")
        
        # 5. Final Answer
        return f"Final Answer: The company has 48 engineers across 4 teams, averaging {float(math_result):.0f} engineers per team."

agent = AutonomousAgent(TOOLS)
print(agent.step("Find engineering headcount and calculate team size across 4 squads."))
\`\`\``;
    }

    // -------------------------------------------------------------------------
    // 9. DOCKER & CONTAINERIZATION
    // -------------------------------------------------------------------------
    if (q.includes("docker") || q.includes("container") || q.includes("kubernetes")) {
        return `## Docker & Containerization: Concepts & Practical Implementation

### 📖 Concept
**Docker** is an open-source platform that packages an application along with all of its dependencies, system binaries, configuration files, and runtime environment into an immutable, portable artifact called a **Container**. Docker completely eliminates the ubiquitous software dilemma: *"It worked on my machine."*

### 🔑 Why It Matters
- **Environment Parity**: Your local development container executes identically in staging, CI/CD, and AWS/GCP Kubernetes clusters.
- **Lightweight Virtualization**: Containers share the host OS kernel instead of virtualizing an entire hardware stack like virtual machines (VMs), booting in milliseconds.
- **Resource Efficiency**: High-density execution on host machines reduces cloud infrastructure expenditure.

### ⚙️ How It Works
- **Dockerfile**: Text file containing declarative instructions to construct an image.
- **Image**: Read-only, multi-layered template built from a Dockerfile.
- **Container**: Stateful, isolated, running process instantiated from an image.
- **Namespaces & Cgroups**: Linux kernel primitives providing process isolation and resource limits (CPU/Memory).

---

### 💻 Practical Implementation

**1. Production Multi-Stage Dockerfile for Node.js Services:**
\`\`\`dockerfile
# Stage 1: Build & Dependency Resolution
FROM node:20-alpine AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Minimal Distroless Production Image
FROM node:20-alpine AS runner
WORKDIR /app

# Security: Never run containers as root
USER node

# Copy dependencies and source from build stage
COPY --chown=node:node --from=dependencies /app/node_modules ./node_modules
COPY --chown=node:node . .

ENV NODE_ENV=production
ENV PORT=5000
EXPOSE 5000

# Health check probe
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \\
  CMD wget --no-verbose --tries=1 --spider http://localhost:5000/api/health || exit 1

CMD ["node", "backend/server.js"]
\`\`\`

**2. Multi-Service Orchestration with Docker Compose:**
\`\`\`yaml
version: "3.9"

services:
  rader-ai:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "5000:5000"
    environment:
      - PORT=5000
      - NODE_ENV=production
    restart: unless-stopped
    depends_on:
      redis-cache:
        condition: service_healthy

  redis-cache:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 3
    volumes:
      - redis_data:/data

volumes:
  redis_data:
\`\`\`

**3. Essential Production CLI Commands:**
\`\`\`bash
# Build optimized image with custom tag
docker build -t rader-ai:v1.0 .

# Run detached container with memory limits and port mapping
docker run -d --name rader-container --memory="512m" --cpus="1.0" -p 5000:5000 rader-ai:v1.0

# Inspect resource utilization in real time
docker stats rader-container

# Tail application logs
docker logs -f --tail 100 rader-container
\`\`\``;
    }

    // -------------------------------------------------------------------------
    // 10. TECHNICAL INTERVIEW PREPARATION
    // -------------------------------------------------------------------------
    if (q.includes("interview") || q.includes("recruiter") || q.includes("two sum") || q.includes("system design") || q.includes("prepare")) {
        return `## Technical Interview Mastery: Concepts & Practical Solutions

### 📖 Concept
Technical interviews evaluate candidate proficiency across three non-negotiable vectors:
1. **Algorithmic Problem Solving (Data Structures & Algorithms)**: Time and space complexity trade-offs ($O(n)$ vs $O(n^2)$).
2. **System Design & Distributed Architecture**: Scalability, fault tolerance, consistency, and availability.
3. **Behavioral & Engineering Leadership**: STAR framework communication (Situation, Task, Action, Result).

### 🔑 Why It Matters
Top-tier technology firms look for structured thought processes over memorization. Communicating trade-offs clearly distinguishes senior engineers from junior developers.

---

### 💻 Practical Implementation

**1. Data Structures: Optimal Two Sum with Hash Map ($O(n)$ Time, $O(n)$ Space):**
\`\`\`python
def two_sum_optimal(nums: list[int], target: int) -> list[int]:
    """
    Finds two numbers that sum up to target.
    
    Approach: Single-pass hash map storing complement -> original index.
    Time Complexity: O(n) vs naive brute-force O(n^2)
    Space Complexity: O(n)
    """
    seen_map = {}  # complement -> index
    
    for current_idx, num in enumerate(nums):
        complement = target - num
        if complement in seen_map:
            return [seen_map[complement], current_idx]
        seen_map[num] = current_idx
        
    return []

# Test cases
print(two_sum_optimal([2, 7, 11, 15], 9))    # [0, 1]
print(two_sum_optimal([3, 2, 4], 6))         # [1, 2]
\`\`\`

**2. System Design: Scalable URL Shortener (TinyURL / Bit.ly):**
\`\`\`python
import hashlib
import time

class ProductionURLShortener:
    """
    Architecture:
    - Base62 encoding / Hash truncation for short tokens
    - Cache layer for 99% read heavy traffic (100:1 read/write ratio)
    - Key-value persistence (Redis + DynamoDB/Cassandra)
    """
    def __init__(self):
        self.code_to_url = {}
        self.url_to_code = {}

    def shorten(self, original_url: str) -> str:
        if original_url in self.url_to_code:
            return f"https://rader.ai/{self.url_to_code[original_url]}"

        # Hash long URL with salt to prevent collisions
        salt = str(time.time_ns())
        token = hashlib.sha256((original_url + salt).encode()).hexdigest()[:7]
        
        self.code_to_url[token] = original_url
        self.url_to_code[original_url] = token
        return f"https://rader.ai/{token}"

    def redirect(self, token: str) -> str:
        return self.code_to_url.get(token, "404 Not Found")

shortener = ProductionURLShortener()
short_link = shortener.shorten("https://github.com/Umesh-linux/rader-ai")
print("Shortened Link:", short_link)
token = short_link.split("/")[-1]
print("Resolved Link: ", shortener.redirect(token))
\`\`\`

**3. STAR Method Behavioral Blueprint:**
\`\`\`text
Question: "Describe a production incident you resolved under pressure."

Situation: "During Black Friday traffic, our primary authentication cluster 
           reached 95% CPU saturation, rejecting 15% of user login attempts."

Task:      "As on-call lead, I had to stop user-facing errors within 15 minutes 
           and identify the root cause."

Action:    "I enabled aggressive Redis token caching to offload DB lookups, 
           diverted read replicas, and scaled horizontal worker pods by 300%."

Result:    "Error rate dropped back to 0.01% in 8 minutes. We saved an estimated 
           \$350k in checkout revenue and implemented circuit breakers post-incident."
\`\`\``;
    }

    // -------------------------------------------------------------------------
    // 11. STARTUP IDEAS & COMMERCIAL AI
    // -------------------------------------------------------------------------
    if (q.includes("startup") || q.includes("business idea") || q.includes("commercial")) {
        return `## AI Startup Architecture: Concepts & Practical Strategy

### 📖 Concept
The most enduring AI startups do not merely wrap frontier LLM APIs; they solve **domain-specific pain points** with proprietary data flywheels, rigorous workflow integrations, and defensible moats.

### 🔑 Evaluating AI Startup Viability
- **The 10x Rule**: Does the solution make an existing enterprise workflow 10x faster or 10x cheaper?
- **Defensible Data Moat**: Does every customer interaction generate telemetry or data that improves model quality over competitors?
- **Workflow Stickiness**: Is the tool embedded into existing customer systems (Salesforce, Epic, GitHub, SAP)?

---

### 🚀 5 High-Impact AI Startup Blueprints for 2026

1. **Autonomous Medical Scribe & Diagnostic Cross-Referencing**
   - *Problem*: Doctors spend 35% of their working hours typing EHR notes.
   - *Solution*: Ambient audio processing creating clinical notes and checking pharmacological contraindications.
   - *Moat*: Hospital system EHR integration and HIPAA compliance pipeline.

2. **Legacy Modernization Agent (COBOL / Fortran to Modern Microservices)**
   - *Problem*: Trillions in daily banking transactions run on 40-year-old unmaintained mainframe code.
   - *Solution*: Agentic code refactoring with automated test invariant synthesis and verification.
   - *Moat*: Proprietary transpilation verifiers and regression test generation.

3. **Enterprise Knowledge Engine with Private Zero-Trust RAG**
   - *Problem*: Employees waste hours searching through siloed Slack, Notion, and Google Drive docs.
   - *Solution*: Real-time indexed local vector search with strict role-based access control.
   - *Moat*: Deep permissions integration across enterprise SaaS tools.

---

### 💻 Practical Implementation: Startup Evaluation Engine

\`\`\`python
def score_ai_venture(
    pain_severity: int,       # 1-10 (10 = critical revenue/compliance issue)
    ai_leverage: int,         # 1-10 (10 = 10x improvement over manual)
    market_size_billions: float,
    defensibility_score: int  # 1-10 (Data moat / integration lock-in)
) -> dict:
    """Calculates venture opportunity score."""
    total_score = (
        pain_severity * 0.35 +
        ai_leverage * 0.30 +
        min(market_size_billions, 10.0) * 0.15 +
        defensibility_score * 0.20
    )
    
    verdict = (
        "🟢 HIGH-POTENTIAL VENTURE - Pursue MVP" if total_score >= 7.5 else
        "🟡 MODERATE OPPORTUNITY - Validate Moat" if total_score >= 5.5 else
        "🔴 HIGH RISK - Pivot Idea"
    )
    
    return {
        "opportunity_score": round(total_score, 2),
        "verdict": verdict,
        "recommended_action": "Conduct 25 customer discovery interviews before writing code."
    }

# Evaluating Legacy Code Modernization Engine
report = score_ai_venture(
    pain_severity=9,
    ai_leverage=9,
    market_size_billions=12.5,
    defensibility_score=8
)
print("Startup Audit Report:", report)
\`\`\``;
    }

    // -------------------------------------------------------------------------
    // 12. FRONTIER MODEL COMPARISON (ChatGPT, Gemini, Claude, Astra)
    // -------------------------------------------------------------------------
    if (q.includes("chatgpt") || q.includes("gemini") || q.includes("claude") || q.includes("compare") || q.includes("astra")) {
        return `## Frontier AI Models Comparison: Concepts & Practical Architecture

### 📖 Concept
Frontier foundation models represent the pinnacle of large-scale machine learning research. While they share core Transformer foundations, each frontier model is engineered with distinct architectural specializations and alignment paradigms.

### 🔑 Comparative Architecture Matrix

| Dimension | OpenAI GPT-4o / o1 | Google Gemini 1.5/2.0 | Anthropic Claude 3.5 Sonnet |
|:---|:---|:---|:---|
| **Primary Strength** | Reasoning & ecosystem tooling | Massive 2M+ token context | Code generation & nuanced prose |
| **Context Window** | 128,000 tokens | 2,000,000+ tokens | 200,000 tokens |
| **Alignment Method** | RLHF + DPO | Multi-modal from scratch | Constitutional AI / RLAIF |
| **Unique Feature** | GPT Store, Advanced Voice | Native audio/video ingestion | Artifacts, Computer Use agent |

---

### 💻 Practical: Intelligent Model Router

\`\`\`python
def route_model_request(task_description: str, token_count: int) -> dict:
    """Routes an incoming task to the optimal frontier model based on strengths."""
    task = task_description.lower()

    if token_count > 200_000:
        return {
            "model": "Google Gemini 1.5 Pro",
            "reason": "Context exceeds 200k tokens; Gemini native 2M window required."
        }
    elif any(kw in task for kw in ["refactor", "code", "architecture", "debug", "unit test"]):
        return {
            "model": "Anthropic Claude 3.5 Sonnet",
            "reason": "Highest coding benchmarks and structural understanding."
        }
    elif any(kw in task for kw in ["math", "logic puzzle", "formal verification", "olympiad"]):
        return {
            "model": "OpenAI o1",
            "reason": "Dedicated chain-of-thought test-time compute scaling."
        }
    else:
        return {
            "model": "OpenAI GPT-4o",
            "reason": "Best general-purpose conversational speed and multimodal integration."
        }

# Usage
print(route_model_request("Refactor my Express and React TypeScript codebase", 15000))
print(route_model_request("Ingest 500 pages of legal contracts and find contradictions", 350000))
\`\`\``;
    }

    // -------------------------------------------------------------------------
    // 13. DYNAMIC FALLBACK: CONCEPT + PRACTICAL FOR ANY TOPIC
    // -------------------------------------------------------------------------
    const cleanTopic = raw
        .replace(/^(what is|what are|explain|how to|tell me about|describe|write code for|can you explain|help me with)\s+/i, "")
        .replace(/[?!.]+$/, "")
        .trim();
    const topicTitle = cleanTopic ? (cleanTopic.charAt(0).toUpperCase() + cleanTopic.slice(1)) : "Software Engineering Concept";
    const sanitizedClass = topicTitle.replace(/[^a-zA-Z0-9]/g, "") || "ServiceModule";

    return `## ${topicTitle}: Concepts & Practical Implementation

### 📖 Concept
**${topicTitle}** is a key concept in modern software engineering, computer science, and systems design. Understanding it requires mastering both its theoretical underpinnings and hands-on practical application.

### 🔑 Why It Matters
- **Decomposition**: Allows complex domains to be broken down into modular, testable, and maintainable units.
- **Maintainability & Scalability**: Follows proven industry design patterns to ensure robust execution under production load.
- **Efficiency**: Reduces computational complexity and prevents common architectural bottlenecks.

### ⚙️ How It Works
1. **Core Principle**: Formulates a clear abstraction separating interface from implementation.
2. **State & Control Flow**: Ingests input parameters, applies domain transformations, and enforces validation boundaries.
3. **Resilience**: Incorporates structured error handling and deterministic return contracts.

---

### 💻 Practical Implementation

\`\`\`python
class ${sanitizedClass}:
    """Production implementation demonstrating ${topicTitle}."""

    def __init__(self, name: str = "${topicTitle}"):
        self.name = name
        self.is_active = True
        self.execution_count = 0

    def process(self, payload: dict) -> dict:
        """Processes payload with validation and audit telemetry."""
        if not payload:
            raise ValueError("Input payload cannot be empty.")

        self.execution_count += 1
        return {
            "module": self.name,
            "status": "SUCCESS",
            "items_processed": len(payload),
            "execution_id": self.execution_count,
            "data": payload
        }

# Usage Example
instance = ${sanitizedClass}()
result = instance.process({"concept": "${topicTitle}", "practical_ready": True})
print("Execution Result:", result)
\`\`\`

*Would you like to explore deeper architectural variations, edge cases, or implementations in Java, TypeScript, or Go?*`;
}

/*
=============================================================================
CHAT API (100% ZERO-API-KEY CAPABILITY)
=============================================================================
*/
app.post("/api/chat", (req, res) => {
    try {
        const { messages } = req.body;

        if (!Array.isArray(messages)) {
            return res.status(400).json({
                error: "Messages must be an array."
            });
        }

        const cleanMessages = messages.filter(m => m && typeof m.content === "string");
        const lastUserMessage = [...cleanMessages].reverse().find(m => m.role === "user")?.content || "";

        // Zero-API-key instant response
        const answer = generateRaderResponse(lastUserMessage, cleanMessages);
        res.json({ answer });

    } catch (error) {
        console.error("Rader AI Engine Error:", error);
        res.status(500).json({
            error: "Unable to generate response."
        });
    }
});

/*
=============================================================================
HEALTH CHECK
=============================================================================
*/
app.get("/api/health", (req, res) => {
    res.json({
        status: "Rader AI is running with 100% zero-API-key local intelligence",
        mode: "Zero-API-Key Enabled",
        timestamp: new Date().toISOString()
    });
});

/*
=============================================================================
SERVER LISTENER
=============================================================================
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Rader AI Zero-API-Key Server running on http://localhost:${PORT}`);
});
